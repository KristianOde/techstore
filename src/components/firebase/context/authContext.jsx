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
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function loggInnFirebase(epost, passord) {
        return auth.signInWithEmailAndPassword(epost, passord)
    }

    function registrerBrukerFirebase(epost, passord) {
        return auth.createUserWithEmailAndPassword(epost, passord)
    }

    function registrerBrukerFirestore(epost, brukernavn, passord) {
        return db.collection("Brukere").doc(brukernavn).set({
            epost: epost,
            brukernavn: brukernavn,
          });  
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
    }, [])

    const value = {
        currentUser,
        loggInnFirebase,
        registrerBrukerFirebase,
        registrerBrukerFirestore,
    }

    return (
        <authContext.Provider value={value}>
            {!loading && children}
        </authContext.Provider>
    )
}


