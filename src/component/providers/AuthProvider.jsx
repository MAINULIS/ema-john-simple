import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


// firebase
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // 1. Sign Up
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // 2. Sign In
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email,password);
    }
    // 3. LogOut
    const logOut = () =>{
        return signOut(auth);
    }
    // 4. observe user auth state change
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log(currentUser)
        })
        // stop observing while unmounting
        return () =>{
            unsubscribe();
        }
    }, [])

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