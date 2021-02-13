/**
 * Meningsløs custom hook og context provider, inkludert for
 * repetisjon og demonstrasjon
 */

import React, { createContext, useState, useContext } from 'react'

const list = [
    "Hjem", "Kategorier", "Tilbud", "Min side", "Kontakt oss", "Logg ut"
]

const ListContext = createContext()

export const useHeaderLinks = () => useContext(ListContext)

export function HeaderLinksProvider ({ children }) {
    const [listelements, setListelements] = useState(list)
    return(
        <ListContext.Provider value={{ listelements, setListelements }}>
            {children}
        </ListContext.Provider>
    )
}