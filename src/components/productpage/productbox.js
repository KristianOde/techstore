import React from 'react'
import { useCartContext } from '../app/hooks/cartContext';
import useFireImage from "../firebase/useFireImage";

const ProductPageBox = ({ product }) => {
    const {addItemToCart} = useCartContext()

    const [imageUrl] = useFireImage(product.Navn)

    return (
        <div className="ProductBox FadeIn">
            <img src={imageUrl} alt=""/>
            <div className="ProductPageBoxInfo">
                <h1>{product.Navn}</h1>
                <h2>{product.shortdescription}</h2>
                <p>{product.Beskrivelse}</p>
                <h2>kr {Math.round(product.Pris - (product.Pris * (product.Tilbud / 100)))},-</h2>
                <button 
                    className="BuyButton big" 
                    onClick={() => addItemToCart(product)}
                >
                    KJØP
                </button>
            </div>

        </div>
    )
}

export default ProductPageBox