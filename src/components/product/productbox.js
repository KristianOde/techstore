import React from 'react'
import useFireImage from '../firebase/useFireImage'

const ProductBox = ({product}) => {
    const {Navn: name, Pris: price} = product
    const [image] = useFireImage(name, null)
    
    return (
        <div className="ProductBox">
            <img className="ProductImage" src={image} alt={name}/>
            <div className="ProductTextBox" >
                <div className="ProductTitle">{name}</div>
            </div>
            <div className="ProductPurchaseBox">
                <div className="ProductPrice">{price},-</div>
                <button className="BuyButton">KJØP</button>
            </div>
        </div>
    )
}

export default ProductBox