import Linklist from "../linklist/linklist"
import { HeaderLinksProvider } from './hooks/useHeader.js'
import '../../styles/mainheader.css'

const Header = () => {
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