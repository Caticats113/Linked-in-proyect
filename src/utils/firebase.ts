import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { dispatch } from "../store";
import { navigate, setUserCredentials } from "../store/actions";
import { Screens } from "../types/store";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, doc, onSnapshot, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { Data } from "../types/data";
import { DataR } from "../types/dataR";

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

const addPost = async (post:any) => {
    try {
        const where = collection(db, "data");
        await addDoc(where, { ...post, createdAt: new Date() }); // add createdAt field
        console.log("se añadió con éxito");
    } catch (error) {
        console.error(error);
    }
};

const getPosts = async () => {
    const q = query(collection(db, "data"), orderBy("createdAt")); // order by createdAt
    const querySnapshot = await getDocs(q);
    const transformed: Data[] = []

    querySnapshot.forEach((doc) => {
        const data: Omit<Data, "id"> = doc.data() as any;
        transformed.push({ id: doc.id, ...data });
    });
    return transformed
};

const getDatar = async () => {
    const q = query(collection(db, "dataR"), orderBy("createdAt")); // order by createdAt
    const querySnapshot = await getDocs(q);
    const transformed: DataR[] = []

    querySnapshot.forEach((doc) => {
        const data: Omit<DataR, "id"> = doc.data() as any;
        transformed.push({ id: doc.id, ...data });
    });
    return transformed
};

const getPostsListener = (cb: (docs: Data[]) => void) => {
    const q = query(collection(db, "data"), orderBy("createdAt")); // order by createdAt
    onSnapshot(q, (collection) => {
        const docs: Data[] = collection.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as Data[];
        cb(docs);
    });
};

export { auth }
export { db }
export default {
    registerUser,
    loginUser,
    addPost,
    getPosts,
    getDatar,
    getPostsListener
}