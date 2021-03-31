import Offer from "../offer/offer"
import useRawgApi from "../app/hooks/useRawgApi"
import {v4 as uuidv4} from 'uuid'

const Offers = () => {
    const [games] = useRawgApi("list", "final-fantasy")

    const createOffers = () => {
        return games.map((item, i) => (
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