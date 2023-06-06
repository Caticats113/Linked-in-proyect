import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { dispatch } from "../store";
import { navigate, setUserCredentials } from "../store/actions";
import { Screens } from "../types/store";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, doc, onSnapshot, addDoc, getDocs, query, orderBy } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerUser = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}): Promise<boolean> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        console.log(userCredential.user);
        return true;
        // ...
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return false;
    }
    // ..
};

const loginUser = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}) => {
    setPersistence(auth, browserSessionPersistence)
        .then(() => {
            return signInWithEmailAndPassword(auth, email, password);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
};


export { auth }
export { db }
export default {
    registerUser,
    loginUser,
}