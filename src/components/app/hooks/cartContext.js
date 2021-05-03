import React, { useState, useContext, useEffect, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import firebase from "firebase/app";
import "firebase/firestore";
import { useAuth } from "../../firebase/context/authContext";

const db = firebase.firestore();
const CartContext = createContext()

const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [counter, setCounter] = useState(-1)
    const [notificationHelper, setNotificationHelper] = useState(false)
    const { currentUser } = useAuth();

    useEffect(() => {
        if (cartItems.length == 1 && cartItems.length > counter || cartItems.length > counter) {
            setNotificationHelper(true)
            setCounter(cartItems.length)
        }
        else {
            setCounter(cartItems.length)
        }
    }, [cartItems])

    function addItemToCart(item) {
        const newItem = { ...item }
        newItem.uniqueId = uuidv4()
        setCartItems(prevItems => [
            ...prevItems, newItem
        ])
        db.collection("Brukere").doc(currentUser.email).collection("Handlevogn").doc(newItem.Navn).set(newItem)
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        
    }

    function removeItemFromCart(product) {
        const id = product.uniqueId
        setCartItems(prevItems =>
            prevItems.filter(item => item.uniqueId !== id
                ))
        db.collection("Brukere").doc(currentUser.email).collection("Handlevogn").doc(product.Navn).delete()
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        
    }

    function emptyCart() {    
        setCartItems([])
    }

    async function getCart() {
        const snapshot = await db.collection("Brukere").doc(currentUser.email).collection("Handlevogn").get()
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
            var arrayOfValues = await Promise.all(snapshot.docs.map(doc => doc.data()))
            return Promise.all(snapshot.docs.map(doc => doc.data()));

    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addItemToCart,
            removeItemFromCart,
            emptyCart,
            notificationHelper,
            setNotificationHelper,
            getCart
        }}>
            {children}
        </CartContext.Provider>
    )

}

export { CartContextProvider, CartContext, useCartContext }