import HLink from "./link/link"
import { useHeaderLinks } from "../header/hooks/useHeader"

const Linklist = () => {
    const { listelements } = useHeaderLinks()
    return(
        <ul className="HeaderLinkList">
            {listelements.map((item, i) => (
                <HLink key={i} to={item.to} name={item.name} />
            ))}
        </ul>
    )
}

export default Linklist
