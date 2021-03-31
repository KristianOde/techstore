import React, { useState, useContext, useEffect, createContext } from 'react'

const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    function addItemToCart(item) {
        setCartItems(prevItems => [
            ...prevItems, item
        ])
    }

    function removeItemFromCart(id) {
        setCartItems(prevItems => 
            prevItems.filter(item => item.id !== id))
    } 

    function emptyCart() {
        setCartItems([])
    }

    return (
        <CartContext.Provider value={{
            cartItems, addItemToCart, removeItemFromCart, emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )

}

export {CartContextProvider, CartContext}