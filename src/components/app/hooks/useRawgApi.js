import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import placeholderdata from "../../../json/placeholderdata"

/** Note: This is used for testing purposes */
const useRawgApi = (searchform, searchparam) => {
    const [games, setGames] = useState([])
    const [searchType, setSearchType] = useState(searchform)
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const key = 'key=cf84475ac40f4d87857a000b366f12fc'

    const apiUrl = 'https://api.rawg.io/api'
    
    useEffect(() => {
        if (searchType === "id") {
            searchById(searchparam)
        }
        else if (searchType === "list") {
            searchByName(searchparam)
        }
    }, [query])

    const getData = () => {
        fetch(query)
        .then(response => {
            //console.log('Response:', response)
            return response.json()
        })
        .then(data => setGames(data.results))
        // .catch(
        //      //navigate("/404", {replace: true})
        //      setGames(placeholderdata)
        // )
    }

    const searchById = (id) => {
        setQuery(
            `${apiUrl}/games/${id}?${key}`
        )
        getData()
    }

    const searchByName = (searchString) => {
        setQuery(
            `${apiUrl}/games?${key}&search=${searchString}`
        )
        getData()
    }


    return [games]
}

export default useRawgApi