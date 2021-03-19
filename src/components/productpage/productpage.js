import React, { useEffect } from "react"
import { useParams } from "react-router"
import useRawgApi from "../app/hooks/useRawgApi"
import placeholderProduct from "../../json/placeholderProduct"
import ProductBox from "./productbox"


const ProductPage = () => {
    const { productId } = useParams()
    //const [product] = useRawgApi("id", productId)
    const product = placeholderProduct


    console.log(product)

    return (
        <div className="ProductPage">
            <ProductBox product={product}/>
        </div>
    )
}

export default ProductPage