import Linklist from "../linklist/linklist"
import { HeaderLinksProvider } from './hooks/useHeader.js'
import '../../styles/mainheader.css'
import { useAuth } from '../firebase/context/authContext'

const Header = () => {
    const { currentUser } = useAuth()
    return(
        <HeaderLinksProvider> {/* context provider; all children elements are consumers*/}
            <header className="TopHeader">
                <div className="HeaderLogo">TECH WEB</div>
                <Linklist />
            
            </header>
        </HeaderLinksProvider>
    )
}

export default Header