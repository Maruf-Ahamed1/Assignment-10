import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
//__________CreateUser___________________//
const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}

//____OnAuthState Change---//

const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut = () =>{
    return signOut(auth)
    
}

    useEffect( () =>{
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in the auth state changed');
            setUser(currentUser)
        });
        return() =>{
            unSubscribe()
        }
    },[])



    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;