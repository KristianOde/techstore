import { useCartContext } from "../app/hooks/cartContext";
import HLink from "./link/link";

const Linklist = () => {
  const {cartItems} = useCartContext()

  const puburl = process.env.PUBLIC_URL

  return (
    <ul className="HeaderLinkList">
      <HLink to={"/products"} name="Kategorier" image={puburl + "categories.png"}/>
      <HLink to={"/offers"} name="Tilbud" image={puburl + "offers.png"}/>
      <HLink to={"/aboutus"} name="Om oss" image={puburl + "about.png"}/>
      <HLink to={"/profile"} name="Profil" image={puburl + "profile.png"}/>
      <HLink to={"/cart"} name={`Handlekurv (${cartItems.length})`} image={puburl + "cart.png"}/>
    </ul>
  );
};

export default Linklist;
