import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { dispatch } from "../store";
import { navigate, setUserCredentials } from "../store/actions";
import { Screens } from "../types/store";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,
    setPersistence, browserSessionPersistence  } from "firebase/auth";



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerUser=async({
    email,
    password,
}:{
    email:string;
    password:string;
}):Promise<boolean> =>{
    try{
        const userCredential =await    createUserWithEmailAndPassword(auth, email, password);

        console.log (userCredential.user);
        return true;
            // ...
        }catch(error:any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            return false;
            }
            // ..
        };

        const loginUser=async({
            email,
            password,
        }:{
            email:string;
            password:string;
        })=>{
            setPersistence(auth,browserSessionPersistence)
            .then(()=>{
                return  signInWithEmailAndPassword(auth, email, password);
            })
            .catch((error)=>{
                const errorCode=error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);

            });
        };


    onAuthStateChanged(auth, (user) => {
        console.log('get in');
        console.log('user',user)
        if (user) {
        user.email !== null? dispatch(setUserCredentials(user.email)):'';
        dispatch(navigate(Screens.LOGIN));
        } else {
            dispatch(navigate(Screens.DASHBOARD));
        }
      });

    export default{
        registerUser,
        loginUser,
        onAuthStateChanged,

    }


