/**
 * Meningsløs custom hook og context provider, inkludert for
 * repetisjon og demonstrasjon
 */

import React, { createContext, useState, useContext } from 'react'

const list = [
    "Hjem", "Kategorier", "Tilbud", "Min side", "Kontakt oss", "Logg ut"
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