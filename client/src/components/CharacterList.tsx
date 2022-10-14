import {useEffect, useState} from "react"
import Character from "./Character"

function CharacterList(){

    const [character, setCharacters] = useState<any[]>([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        async function fetchData(){
          const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
          const data = await response.json()
          setCharacters(data.results)
        }
        fetchData()
      }, [])


    return(
        <div>
        <Character character = {character} />
      </div>
    )
}

export default CharacterList