/**
 * Meningsløs custom hook og context provider, inkludert for
 * repetisjon og demonstrasjon
 */
import React, { createContext, useState, useContext } from 'react'

const list = [
    {"to":"/", "name":"Hjem"},
    {"to":"test2", "name":"Kategorier"},
    {"to":"test3", "name":"Tilbud"},
    {"to":"test4", "name":"Min Side"},
    {"to":"test5", "name":"Kundeservice"},
    {"to":"login", "name":"Logg inn"}
]

const listWithAuth = [
    {"to":"/", "name":"Hjem"},
    {"to":"test2", "name":"Kategorier"},
    {"to":"test3", "name":"Tilbud"},
    {"to":"test4", "name":"Min Side"},
    {"to":"test5", "name":"Kundeservice"},
    {"to":"profil", "name":"Bruker"}
]

// Oppretter en context
const ListContext = createContext()

// Custom hook
export const useHeaderLinks = () => useContext(ListContext)

// Custom provider, som tilbyr context til barnekomponenter
export function HeaderLinksProvider ({ children }) {
    const [listelements, setListelements] = useState(list)
    const [listelementsWithAuth, setlistelementsWithAuth] = useState(listWithAuth)
    return(
        <ListContext.Provider value={{ listelements, setListelements, listelementsWithAuth, setlistelementsWithAuth}}>
            {children}
        </ListContext.Provider>
    )
}