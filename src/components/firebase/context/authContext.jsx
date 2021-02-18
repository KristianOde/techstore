import { auth } from '../firebase'
import React, { useContext, useState, useEffect } from 'react'

const authContext = React.createContext()

export function useAuth() {
    return useContext(authContext)
}

export function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function loggInnFirebase(epost, passord) {
        return auth.signInWithEmailAndPassword(epost, passord)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
    }, [])

    const value = {
        currentUser,
        loggInnFirebase
    }

    return (
        <authContext.Provider value={value}>
            {!loading && children}
        </authContext.Provider>
    )
}


