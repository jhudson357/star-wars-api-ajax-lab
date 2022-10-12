import { useState, useEffect } from "react"

const StarshipsDetails = () => {
  const [starshipDetails, setStashipDetails] = useState({})
  
  useEffect(() => {
    console.log('Use Effect')
  }, [])

  return (  
    <>
      <h3>STARSHIP DETAIL</h3>
    </>
  );
}

export default StarshipsDetails