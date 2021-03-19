import Offer from "../offer/offer"
import useRawgApi from "../app/hooks/useRawgApi"

const Offers = () => {
    const [games] = useRawgApi("list", "final-fantasy")

    const createOffers = () => {
        return games.map((item, i) => (
            <Offer key={i}
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