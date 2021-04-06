import React, { useEffect, useState } from "react";
import Offer from "../offer/offer"
import useRawgApi from "../app/hooks/useRawgApi"
import {v4 as uuidv4} from 'uuid'
import 'firebase/firestore';
import useProducts from "../firebase/useProducts";

const Offers = () => {
    const [games] = useRawgApi("list", "final-fantasy")
    const [bruker, setBruker] = useProducts("all")

    const createOffers = () => {
        return bruker.map((item, i) => (
            <Offer key={uuidv4()}
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