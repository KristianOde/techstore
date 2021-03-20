import HLink from "./link/link";
import { useHeaderLinks } from "../header/hooks/useHeader";
import { useAuth } from "../firebase/context/authContext";

const Linklist = () => {

  const { listelements } = useHeaderLinks();
  const { listelementsWithAuth } = useHeaderLinks();
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
      {/* {isUserAuthList.map((item, i) => (
        <HLink key={i} to={item.to} name={item.name} />
      ))} */}

      <HLink to={"/products"} name="Kategorier" image={puburl + "categories.png"}/>
      <HLink to={"/offers"} name="Tilbud" image={puburl + "offers.png"}/>
      <HLink to={"/aboutus"} name="Om oss" image={puburl + "about.png"}/>
      <HLink to={loggedIn()} name="Logg inn" image={puburl + "profile.png"}/>
    </ul>
  );
};

export default Linklist;
