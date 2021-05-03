import { auth } from '../firebase'
import React, { useContext, useState, useEffect } from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';

const authContext = React.createContext()
const db = firebase.firestore()

export function useAuth() {
    return useContext(authContext)
}

export function AuthProvider ({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    // Logger bruker inn med Firebase Authentication
    function loggInnFirebase(epost, passord) {
        return auth.signInWithEmailAndPassword(epost, passord)
    }

    // Registrerer bruker i Firebase Authentication (epost og passord)
    function registrerBrukerFirebase(epost, passord) {
        return auth.createUserWithEmailAndPassword(epost, passord)
    }

    // Registrerer bruker i Firestore (epost og brukernavn)
    function registrerBrukerFirestore(epost, brukernavn) {
        return db.collection("Brukere").doc(epost).set({
            epost: epost,
            brukernavn: brukernavn,
          });  
    }

    // Henter innlogget brukers brukernavn
    function getUserInfo(epost) {
        return db.collection("Brukere").doc(epost).get("brukernavn");  
    }

    // Logger ut
    function loggUt() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
            setIsLoggedIn(true)
        })
    }, [])

    const value = {
        currentUser,
        loggInnFirebase,
        registrerBrukerFirebase,
        registrerBrukerFirestore,
        loggUt, 
        isLoggedIn,
        getUserInfo
    }

    return (
        <authContext.Provider value={value}>
            {!loading && children}
        </authContext.Provider>
    )
}


