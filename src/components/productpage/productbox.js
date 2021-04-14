import React from 'react'
import useFireImage from "../firebase/useFireImage";

const ProductPageBox = ({ product }) => {

    const [imageUrl] = useFireImage(product.Navn)

    return (
        <div className="ProductPageBox">
            <img src={imageUrl} alt=""/>
            <div className="ProductPageBoxInfo">
                <h1>{product.Navn}</h1>
                <h2>{product.shortdescription}</h2>
                <p>{product.Beskrivelse}</p>
                <h2>kr {Math.round(product.Pris - (product.Pris * (product.Tilbud / 100)))},-</h2>
                <button className="BuyButton big">KJØP</button>
            </div>

        </div>
    )
}

export default ProductPageBox