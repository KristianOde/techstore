import Linklist from "../linklist/linklist"
import { HeaderLinksProvider } from './hooks/useHeader.js'
import '../../styles/mainheader.css'
import { Link } from 'react-router-dom'


const Header = () => {

    const logo = process.env.PUBLIC_URL + 'headerlogo@2x.png'

    return(
        <HeaderLinksProvider> {/* context provider; all children elements are consumers*/}
            <header className="TopHeader">

                {/* Upper half part of header, containing logo and navigation buttons */}
                <div className="UpperHeaderSection">
                    <div className="HeaderLogo">
                        <Link to="/">
                            <img 
                                src={logo} alt="The Flaskehals"
                                className="HeaderLogoImg"
                            />
                        </Link>
                    </div>
                    <div className="RightUpperHeaderSection">
                        <div className="HeaderNavigation">
                            <Linklist />
                        </div>
                        <div className="HeaderSearchBar">
                            <input className="Searchbar" type="text" placeholder="Søk her"/>
                        </div>
                    </div>
                    <div className="HeaderPlaceholder"></div>
                </div>
            </header>
        </HeaderLinksProvider>
    )
}

export default Header