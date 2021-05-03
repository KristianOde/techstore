import "../../styles/offers.css";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../app/hooks/cartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import useFireImage from "../firebase/useFireImage";

const Offer = ({ product }) => {

  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [fireImageUrl] = useFireImage(product.Navn, null);

  const navigateToProduct = () => {
    navigate(`/product/${product.Navn}`, { replace: true });
  };

  return (
    <div className="OfferBox">
      <div
        className="ProductImageThumbnail"
        onClick={() => navigateToProduct()}
      >
        <img src={fireImageUrl} alt="Produktbilde" />

        <div className="OfferPercentageTag">-{product.Tilbud}%</div>
      </div>
      <div className="ProductInformation">
        <h3>{product.Navn}</h3>
        <h4></h4>
        <p>
          <strong>Før:</strong> {product.Pris},-
          <strong> Nå: </strong>{" "}
          {Math.round(product.Pris - product.Pris * (product.Tilbud / 100))},-
        </p>
        <button className="BuyButton" onClick={() => addItemToCart(product)}>
          KJØP
        </button>
      </div>
    </div>
  );
};

export default Offer;
