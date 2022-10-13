import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getDetails } from "../../services/api-calls"
import { Link } from "react-router-dom"

const StarshipsDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  
  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (  
    <div className="body">
      {starshipDetails.name ?
        <div className="starship-card">
          <h3>NAME: {starshipDetails.name}</h3>
          <h3>MODEL: {starshipDetails.model}</h3>
          <button>
            <Link to='/'>RETURN</Link>  
          </button>
        </div>
        :
        <div className="loading-card">
          <h3>Loading...</h3>
        </div>
      }
    </div>
  );
}

export default StarshipsDetails