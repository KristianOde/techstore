import React, {useState, useContext} from 'react'
import './cart.css'
import {CartContext} from '../app/hooks/cartContext'
import CartItem from './cartitem'
import Bottle from './bottle'

const CartPage = () => {
    const {cartItems, emptyCart} = useContext(CartContext)

    const cartItemsList = cartItems.map(item => {
        return <CartItem key={item.id} item={item}/>
    })

    let totalCost = 0
    cartItems.forEach(e => {
        totalCost += e.Pris
    });

    const logo = process.env.PUBLIC_URL + 'bottle.svg'

    const bottleClass = () => {
        if (cartItems.length <= 0) return "whiteLiquid"
        else if (cartItems.length >= 10) return "redLiquid"
        else if (cartItems.length >= 5) return "yellowLiquid"
        else return "greenLiquid"
    }

    const clickBottle = () => {
        console.log("Bottle clicked")
    }
    

    const cartStatus = () => {
        return cartItems.length > 0 ?
        <>
        <span>{totalCost},-</span>
        <button 
                    onClick={() => emptyCart()}
                    className="emptyCartButton"
                >
                    Empty cart
        </button>
        </> :
        <p>Din handlekurv er tom</p>
    }

    return (
        <div className="cartPage">
            <div className="cartPageBottleNeckCalc">
                <h1>Flaskehals-kalkulator</h1>
                {/* <img src={logo} alt="gulflaskehals" srcset=""/> */}
                <Bottle className={bottleClass()} onClick={() => clickBottle()}/>
            </div>
            <div className="cartPageList">
                {cartItemsList}
                <div style={{}}>
                    {cartStatus()}
                </div>
            </div>
        </div>
    )
}

export default CartPage
