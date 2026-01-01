import { useEffect, useState } from "react"
import { getCurrentPosition } from "../../services/location"
import { Location } from "../../types/location"
import { Loading } from "../../components/Loading"
import { Taximeter } from "./Taximeter"

export const TaximeterScreen = () => {
  const [location, setLocation] = useState<Location>()

  useEffect(() => {
    getCurrentPosition()
      .then((position) => setLocation(position.location))
  }, [])


  if(!location){
    return <Loading/>
  }

  return <Taximeter initialLocation = {location}/>
}
