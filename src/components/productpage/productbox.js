import React from 'react'

const ProductBox = ({product}) => {
    console.log(product)
    const image = process.env.PUBLIC_URL + '/' + product.image
    console.log(image)

    return (
        <div className="ProductBox">
            <img src={image} alt=""/>
            <div className="ProductBoxInfo">
                <h1>{product.name}</h1>
                <h2>{product.shortdescription}</h2>
                <p>{product.description}</p>
                <h2>kr {product.price},-</h2>
                <button className="BuyButton big">KJØP</button>
            </div>

        </div>
    )
}

export default ProductBox