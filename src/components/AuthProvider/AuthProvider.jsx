import { createContext, useEffect, useState, } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../../firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState()



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
            setUser(loggedUser)
        })
        return ()=>{
            unsubscribe
        }
    },[])

    const authInfo = {
        user,
        createUser,
        login,
        loginWithGoogle,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;