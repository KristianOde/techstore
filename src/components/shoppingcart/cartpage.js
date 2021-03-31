import React, {useState, useContext} from 'react'
import './cart.css'
import {CartContext} from '../app/hooks/cartContext'
import CartItem from './cartitem'

const CartPage = () => {
    const {cartItems, emptyCart} = useContext(CartContext)

    const cartItemsList = cartItems.map(item => {
        return <CartItem key={item.id} item={item}/>
    })

    let totalCost = 0
    cartItems.forEach(e => {
        totalCost += e.price
    });

    const logo = process.env.PUBLIC_URL + 'bottle.svg'

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
        <p>Handlekurv er tom</p>
    }

    return (
        <div className="cartPage">
            <div className="cartPageBottleNeckCalc">
                <h1>Bottleneck calculator</h1>
                <img src={logo} alt="gulflaskehals" srcset=""/>
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
