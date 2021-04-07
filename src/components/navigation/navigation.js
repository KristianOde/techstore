import { useLocation, useNavigate } from 'react-router-dom'
import { capitalize, buildUrl } from '../../utils/utils'

const Navigator = ({location, navigateTo}) => {
    return (
        <>
            {location.map((positionName, i) => {
                if (i === 0) return <><span onClick={() => navigateTo(0)} className="CustomLink">Forside</span><span> / </span></>
                return <NavigateItem 
                            key={i} 
                            item={{positionName, index: i}}
                            lastPosition={i == location.length - 1 ? true : false}
                            navigateTo={navigateTo}
                        />
            })}
        </>
    )
}

const NavigateItem = ({item, lastPosition, navigateTo}) => {
    const positionName = capitalize(item.positionName)

    return (
        !lastPosition ?
        <>
            <span className="CustomLink" onClick={() => navigateTo(item.index)}>
                {positionName}
            </span> / {" "}
        </> : 
        <>
            <span>
                {positionName}
            </span>
        </>
    )
}


const Navigation = () => {
    const location = useLocation().pathname.split("/")
    const navigate = useNavigate()

    function navigateTo(index) {
        const url = buildUrl(location, index)
        console.log("url: ")
        navigate(url, {replace: true})
    }

    return(
        <span className="Navigationbar">
            <Navigator location={location} navigateTo={navigateTo}/>
        </span>
    )
}

export default Navigation