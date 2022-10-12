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
      {starships.length ?
        <div className="ship-container">
          {starships.map(starship => 
          <Link to='/starship' key={starship.name} state={{starship}}>
            <div className="ship-card">{starship.name}</div>
          </Link>
          )}
        </div>
        :
        <div className="loading-card">
          <h3>Loading...</h3>
        </div>
      }
    </>
  )
}

export default Starships