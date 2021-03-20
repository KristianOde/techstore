import { Link } from "react-router-dom";

const HLink = ({to, name, image}) => {
    return(
        <li className="HeaderNavigationLink"> 
            <Link to={to}>
                <img src={image} alt="" style={{width: "50px"}}/>
                <div>{name}</div>
            </Link>
        </li>
    )
} 

export default HLink