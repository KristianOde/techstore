import React, {useContext} from 'react'
import {CartContext} from '../app/hooks/cartContext'

const CartItem = ({item}) => {
    const {removeItemFromCart} = useContext(CartContext)

    return (
        <div className="cartItem">
            <div className="cartItemLeft">
                <span style={{fontWeight:"bold"}}>{item.Navn}</span>
            </div>
            <div className="cartItemRight">
                <span className="cartPrice">{item.Pris},-</span>
                <button onClick={() => removeItemFromCart(item)}>X</button>
            </div>
        </div>
    )
}

export default CartItem
