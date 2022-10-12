import { useEffect, useState } from "react"
import { getStarshipList } from "../../services/api-calls"
import { Link } from "react-router-dom"

const Starships = () => {
  const[starships, setStarships] = useState([])
  
  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarships(starshipData.results)
      console.log(starshipData)
    }
    fetchStarshipList()
  }, [])

  return ( 
    <>
        <div className="ship-container">
          {starships.map(starship => 
          <Link to='/starship' key={starship.name} state={{starship}}>
            <div>{starship.name}</div>
          </Link>
          )}
        </div>
    </>
  )
}

export default Starships