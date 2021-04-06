import "../../styles/offers.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../app/hooks/cartContext";
import { randomNumber } from "../../utils/utils";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import loadingBilde from "../../images/tempload.webp";
import useFireImage from "../firebase/useFireImage";

const Offer = ({ product }) => {
  const [offer, setOffer] = useState(40);
  const [imageUrl, setImageUrl] = useState([]);
  const [loading, setLoading] = useState(true);
  /**
   * !!Testing!!
   * Deconstructs the object (which is a videogame, for testing purposes)
   * to better match the names that are to be used
   */

  let storageRef = firebase.storage().ref();

  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();
  //const [fireImageUrl] = useFireImage(product.Navn)

  useEffect(() => {
    const fetchImages = async () => {
      
      let result = await storageRef.child(product.Navn).listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );
      return Promise.all(urlPromises);
    };
    const loadImages = async () => {
      const urls = await fetchImages();
      setImageUrl(urls);
      setTimeout(() => { // Temp
        setLoading(false);
     }, 400);
    };
    loadImages();
  }, []);

  const navigateToProduct = () => {
    navigate(`/product/${product.Navn}`, { replace: true });
  };

  return (
    <div className="OfferBox">
      <div
        className="ProductImageThumbnail"
        onClick={() => navigateToProduct()}
      >
        <img
          src={loadingBilde}
          alt="Produktbilde"
          style={loading ? {} : { display: "none" }}
        />
        <img
          src={imageUrl}
          alt="Produktbilde"
          style={loading ? { display: "none" } : {}}
        />

        <div className="OfferPercentageTag">-{product.Tilbud}%</div>
      </div>
      <div className="ProductInformation">
        <h3>{product.Navn}</h3>
        <h4></h4>
        <p>
          <strong>Før:</strong> {product.Pris},-
          <strong> Nå: </strong> {Math.round(product.Pris - (product.Pris * (product.Tilbud / 100)))},-
        </p>
        <button className="BuyButton" onClick={() => addItemToCart(product)}>
          KJØP
        </button>
      </div>
    </div>
  );
};

export default Offer;
