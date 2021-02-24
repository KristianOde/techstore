import Offer from "../offer/offer"

const Offers = () => {

    const createOffers = () => {
        let offers = []

        for (let i = 0; i < 21; i++) {
            offers.push(<Offer key={i}/>)
        }
        return offers
    }

    return(
        <div className="OffersView">
            {createOffers()}
        </div>
    )
}

export default Offers