import '../../styles/offers.css'
import { useState } from "react";

const Offer = (props) => {
    const [price, setPrice] = useState(856)
    const [offer, setOffer] = useState(40)

    return(
        <div className="OfferBox">
            <div className="ProductImageThumbnail"> 
                <img src={props.image} alt="gpu"/>
                <div className="OfferPercentageTag">-{offer}%</div>
            </div>
            <div className="ProductInformation">
                <h3>{props.productName}</h3>
                <h2>{props.productInfo}</h2>
                <p>
                    <strong>Før:</strong> {price},-  
                    <strong> Nå: </strong> {Math.round(price * 0.6)},-
                </p>
                <button>KJØP</button>
            </div>
        </div>
    )
}

export default Offer