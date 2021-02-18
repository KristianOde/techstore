/**
 * Meningsløs custom hook og context provider, inkludert for
 * repetisjon og demonstrasjon
 */
import React, { createContext, useState, useContext } from 'react'

const list = [
    {"to":"test1", "name":"Hjem"},
    {"to":"test2", "name":"Kategorier"},
    {"to":"test3", "name":"Tilbud"},
    {"to":"test4", "name":"Min Side"},
    {"to":"test5", "name":"Kontakt oss"},
    {"to":"/", "name":"Logg inn"}
]

// Oppretter en context
const ListContext = createContext()

// Custom hook
export const useHeaderLinks = () => useContext(ListContext)

// Custom provider, som tilbyr context til barnekomponenter
export function HeaderLinksProvider ({ children }) {
    const [listelements, setListelements] = useState(list)
    return(
        <ListContext.Provider value={{ listelements, setListelements }}>
            {children}
        </ListContext.Provider>
    )
}