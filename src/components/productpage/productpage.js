import React, { useEffect } from "react"
import { useParams } from "react-router"
import useRawgApi from "../app/hooks/useRawgApi"

const ProductPage = () => {
    const { productId } = useParams()
    const [product] = useRawgApi("id", productId)

    console.log(product)

    return (
        <div className="ProductPage">
            <img/>
            <h1>{}</h1>
        </div>
    )
}

export default ProductPage