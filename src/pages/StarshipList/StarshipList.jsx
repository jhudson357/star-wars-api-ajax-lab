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
      <Link>
        <div className="ship-container">
          {starships.map(starship => 
            <div key={starship.name}>{starship.name}</div>
          )}
        </div>
      </Link>
    </>
  )
}

export default Starships