import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()



//__________CreateUser___________________//
const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

//____OnAuthState Change---//

const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
// //_________LogOut Part__________//
const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}

//----Google Login---------//
    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }



    useEffect( () =>{
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in the auth state changed');
            setUser(currentUser)
            setLoading(false)
        });
        return() =>{
            unSubscribe()
        }
    },[])



    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        signIn,
        logOut,
        googleLogin
   

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




















// //__________GoogleSignIN___________//
// const signInWithGoogle = () =>{
//     setLoading(true)
//     return signInWithPopup(auth,GoogleAuthProvider)
// }
// //_________facebookSignIn__________//
// const SingInWithFacebook = () =>{
// setLoading(true)
// return signInWithPopup(auth,FacebookAuthProvider)
// }
