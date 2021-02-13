import HLink from "./link/link"
import { useHeaderLinks } from "../header/hooks/useHeader"

const Linklist = () => {
    const { listelements } = useHeaderLinks()
    return(
        <ul className="HeaderLinkList">
            {listelements.map((item, i) => (
                <HLink key={i} name={item} />
            ))}
        </ul>
    )
}

export default Linklist
