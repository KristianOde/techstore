import '../../styles/offers.css'
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from '../app/hooks/cartContext';
import {randomNumber} from '../../utils/utils'
import { v4 as uuidv4 } from "uuid";

const Offer = ({product}) => {
    const [offer, setOffer] = useState(40)
    /**
     * !!Testing!!
     * Deconstructs the object (which is a videogame, for testing purposes)
     * to better match the names that are to be used
     */
    const [prod, setProd] = useState({
        name: product.name,
        productInfo: product.released,
        image: product.background_image,
        id: product.id + "-" + uuidv4(), // adds a random keyphrase to the id to ensure it is unique
        price: randomNumber(100, 16000),
        offerPercentage: offer
    })
    const {addItemToCart} = useContext(CartContext)
    const navigate = useNavigate()


    const navigateToProduct = () => {
        navigate(`/product/${prod.id}`, {replace: true})
    }

    return(
        <div className="OfferBox">
            <div className="ProductImageThumbnail"  onClick={() => navigateToProduct()}> 
                <img src={prod.image} alt="gpu"/>
                <div className="OfferPercentageTag">-{prod.offerPercentage}%</div>
            </div>
            <div className="ProductInformation">
                <h3>{prod.name}</h3>
                <h4>{prod.productInfo}</h4>
                <p>
                    <strong>Før:</strong> {prod.price},-  
                    <strong> Nå: </strong> {Math.round(prod.price * 0.6)},-
                </p>
                <button className="BuyButton" onClick={() => addItemToCart(prod)}>KJØP</button>
            </div>
        </div>
    )
}

export default Offer