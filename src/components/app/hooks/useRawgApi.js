import { useState, useEffect } from "react"

/** Note: This is used for testing purposes */
const useRawgApi = () => {
    const [games, setGames] = useState([])

    const url = "https://api.rawg.io/api/games?key=cf84475ac40f4d87857a000b366f12fc&search=final-fantasy"

    useEffect(() => {
        fetch(url, {method: 'GET'})
        .then(response => response.json())
        .then(data => setGames(data.results))
    }, [])

    return [games]
}

export default useRawgApi