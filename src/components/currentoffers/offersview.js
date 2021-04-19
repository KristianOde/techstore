import React, { useEffect, useState } from "react";
import Offer from "../offer/offer"
import ProductBox from "../product/productbox"
import useRawgApi from "../app/hooks/useRawgApi"
import {v4 as uuidv4} from 'uuid'
import 'firebase/firestore';
import useFirestoreProducts from "../firebase/useFirestoreProducts";

const Offers = () => {
    // const [games] = useRawgApi("list", "final-fantasy")
    const [products] = useFirestoreProducts("all")

    const createOffers = () => {
        return products.map((item, i) => (
            <ProductBox key={uuidv4()}
                product={item}
            />
        ))
    }

    return(
        <div className="OffersView">
            {createOffers()}
        </div>
    )
}

export default Offers