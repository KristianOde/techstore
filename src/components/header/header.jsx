import Linklist from "../linklist/linklist"
import { HeaderLinksProvider } from './hooks/useHeader.js'
import '../../styles/mainheader.css'
import { useAuth } from '../firebase/context/authContext'

const Header = () => {
    const { currentUser } = useAuth()
    return(
        <HeaderLinksProvider> {/* context provider; all children elements are consumers*/}
            <header className="TopHeader">
                <div className="UpperHeaderSection">
                    <div className="HeaderLogo">TECH WEB</div>
                    <div className="SearchBarHolder">
                        <input className="Searchbar" type="text" placeholder="Søk her"/>
                    </div>
                    <div className="HeaderPlaceholder"></div>
                </div>
                <div className="LowerHeaderSection">
                    <Linklist />
                </div>            
            </header>
        </HeaderLinksProvider>
    )
}

export default Header