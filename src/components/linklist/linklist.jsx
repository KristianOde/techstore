import HLink from "./link/link";
import { useAuth } from "../firebase/context/authContext";

const Linklist = () => {
  const { currentUser } = useAuth();

  const puburl = process.env.PUBLIC_URL

  function loggedIn() {
    if (currentUser == null) {
      return "/login"
    } else {
      return "profile"
    }
  }

  return (
    <ul className="HeaderLinkList">
      <HLink to={"/products"} name="Kategorier" image={puburl + "categories.png"}/>
      <HLink to={"/offers"} name="Tilbud" image={puburl + "offers.png"}/>
      <HLink to={"/aboutus"} name="Om oss" image={puburl + "about.png"}/>
      <HLink to={loggedIn()} name="Logg inn" image={puburl + "profile.png"}/>
      <HLink to={"/cart"} name="Handlekurv" image={puburl + "cart.png"}/>
    </ul>
  );
};

export default Linklist;
