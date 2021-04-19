import React from 'react'
import { useCartContext } from '../app/hooks/cartContext'
import useFireImage from '../firebase/useFireImage'

const ProductBox = ({product}) => {
    const {addItemToCart} = useCartContext()
    const {Navn: name, Pris: price} = product
    const [image] = useFireImage(name, null)
    
    return (
        <div className="ProductBox FadeIn">
            <img className="ProductImage" src={image} alt={name}/>
            <div className="ProductTextBox" >
                <div className="ProductTitle">{name}</div>
            </div>
            <div className="ProductPurchaseBox">
                <div className="ProductPrice">{price},-</div>
                <button 
                    className="BuyButton"
                    onClick={() => addItemToCart(product)}
                >
                    KJØP
                </button>
            </div>
        </div>
    )
}

export default ProductBox