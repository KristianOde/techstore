import Offer from "../offer/offer"
import useRawgApi from "../app/hooks/useRawgApi"

const Offers = () => {
    const [games] = useRawgApi()

    const createOffers = () => {
        return games.map((item, i) => (
            <Offer key={i}
                productName={item.name}
                image={item.background_image}
                productInfo={item.released}
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