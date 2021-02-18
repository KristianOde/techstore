import { Link } from "react-router-dom";

const HLink = ({to, name}) => {
    return(
        <li><Link to={to}>{name}</Link></li>
    )
} 

export default HLink