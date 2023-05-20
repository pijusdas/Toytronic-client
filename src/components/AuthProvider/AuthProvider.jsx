import { createContext, useEffect, useState, } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../../firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState({})
    const [loader,setLoader] = useState(true)



    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
            setUser(loggedUser)
            setLoader(false)
        })
        return ()=>{
            unsubscribe
        }
    },[user])

    const authInfo = {
        user,
        loader,
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