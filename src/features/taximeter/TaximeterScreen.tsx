import { useEffect, useState } from "react"
import { getCurrentPosition } from "../../services/location"
import { Location } from "../../types/location"
import { Loading } from "../../components/Loading"
import { Taximeter } from "./Taximeter"
import { useLocationPermissions } from "@gabriel-sisjr/react-native-background-location"

export const TaximeterScreen = () => {
  const [location, setLocation] = useState<Location>()
  
  const { permissionStatus, requestPermissions } = useLocationPermissions();

  useEffect(() => {
    
    const init = async () => {
      if(!permissionStatus.hasPermission){
        const result = await requestPermissions()
        
        if(!result) {}
      }

      const position = await getCurrentPosition()
    
      setLocation(position.location)
    }

    init()
  }, [])


  if(!location){
    return <Loading/>
  }

  return <Taximeter initialLocation = {location}/>
}
