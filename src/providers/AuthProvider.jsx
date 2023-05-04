import React, {createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGooglePopUp = () =>{
        setLoading(true);
       return signInWithPopup(auth, provider)
    }

    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log('logged user', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    },[])

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const profileUpdate = (Name, photo) => {
       return updateProfile(auth.currentUser, {
        displayName: {Name}, photoURL: {photo}
        })
    }

    const gitLogin = () =>{
        setLoading(true);
      return  signInWithPopup(auth, gitProvider);
    }

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        signInGooglePopUp,
        loading,
        profileUpdate,
        gitLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;