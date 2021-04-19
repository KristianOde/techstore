import React, { useState, useContext, useEffect, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

const CartContext = createContext()

const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [counter, setCounter] = useState(-1)
    const [notificationHelper, setNotificationHelper] = useState(false)

    useEffect(() => {
        if (cartItems.length == 1 && cartItems.length > counter || cartItems.length > counter) {
            setNotificationHelper(true)
            setCounter(cartItems.length)
            console.log("if " + cartItems.length + "||" + counter)
        }
        else {
            setCounter(cartItems.length)
            console.log("else " + cartItems.length + "||" + counter)
        }
    }, [cartItems])

    function addItemToCart(item) {
        const newItem = { ...item }
        newItem.uniqueId = uuidv4()
        setCartItems(prevItems => [
            ...prevItems, newItem
        ])
    }

    function removeItemFromCart(product) {
        const id = product.uniqueId
        setCartItems(prevItems =>
            prevItems.filter(item => item.uniqueId !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addItemToCart,
            removeItemFromCart,
            emptyCart,
            notificationHelper,
            setNotificationHelper
        }}>
            {children}
        </CartContext.Provider>
    )

}

export { CartContextProvider, CartContext, useCartContext }