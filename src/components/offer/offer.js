import '../../styles/offers.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Offer = ({product}) => {
    const [price, setPrice] = useState(856)
    const [offer, setOffer] = useState(40)
    const navigate = useNavigate()

    /**
     * !!Testing!!
     * Deconstructs the object (which is a videogame, for testing purposes)
     * to better match the names that are to be used
     */
    const prod = ({
        name: product.name,
        productInfo: product.released,
        image: product.background_image,
        id: product.id
    })

    const navigateToProduct = () => {
        navigate(`/product/${prod.id}`, {replace: true})
    }

    return(
        <div className="OfferBox" onClick={() => navigateToProduct()}>
            <div className="ProductImageThumbnail"> 
                <img src={prod.image} alt="gpu"/>
                <div className="OfferPercentageTag">-{offer}%</div>
            </div>
            <div className="ProductInformation">
                <h3>{prod.name}</h3>
                <h4>{prod.productInfo}</h4>
                <p>
                    <strong>Før:</strong> {price},-  
                    <strong> Nå: </strong> {Math.round(price * 0.6)},-
                </p>
                <button className="BuyButton" onClick={() => navigateToProduct()}>KJØP</button>
            </div>
        </div>
    )
}

export default Offer