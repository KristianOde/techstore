import HLink from "./link/link";
import { useHeaderLinks } from "../header/hooks/useHeader";
import { useAuth } from "../firebase/context/authContext";

const Linklist = () => {

  const { listelements } = useHeaderLinks();
  const { listelementsWithAuth } = useHeaderLinks();
  const { currentUser } = useAuth();

  if (currentUser == null) {
    var isUserAuthList = listelements;
  } else {
    var isUserAuthList = listelementsWithAuth;
  }

  return (
    <ul className="HeaderLinkList">
      {isUserAuthList.map((item, i) => (
        <HLink key={i} to={item.to} name={item.name} />
      ))}
    </ul>
  );
};

export default Linklist;
