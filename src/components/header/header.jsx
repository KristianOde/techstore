import Linklist from "../linklist/linklist"
import { HeaderLinksProvider } from './hooks/useHeader.js'
import '../../styles/mainheader.css'

const Header = () => {
    return(
        <HeaderLinksProvider>
            <header className="TopHeader">
                <span>TECH WEB STORE</span>
                <Linklist />
            </header>
        </HeaderLinksProvider>
    )
}

export default Header