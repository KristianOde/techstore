import '../../styles/offers.css'

const Offer = () => {
    const image = '/cartoon_gpu.png'

    return(
        <div className="OfferBox">
            <img src={image} alt="gpu"/>
            <p>Produkt</p>
        </div>
    )
}

export default Offer