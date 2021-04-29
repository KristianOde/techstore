import React from 'react'
import { useCartContext } from '../app/hooks/cartContext'
import useFireImage from '../firebase/useFireImage'
import Divider from '../common/divider'

const ProductBox = ({isGrid = true, product, index, arrayLength}) => {
    const {addItemToCart} = useCartContext()
    const {Navn: name, Pris: price} = product
    const [image] = useFireImage(name, null)

    const classname = () => {
        if (isGrid) return "ProductBox FadeIn"
        else return "ProductBoxVertical FadeIn"
    }
    const divider = (index) => {
        if (isGrid) return null
        if (index < arrayLength-1) return <Divider />
    }
    
    return (
        <>
            <div className={classname()}>
                <img className="ProductImage" src={image} alt={name}/>
                <div className="ProductTextBox" >
                    <div className="ProductTitle">{name} {index}</div>
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
            {divider(index)}
        </>
    )
}

export default ProductBox