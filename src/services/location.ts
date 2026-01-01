import Geolocation, { GeolocationResponse } from "@react-native-community/geolocation";
import { Position } from "../types/location";

const format = (position : GeolocationResponse) : Position => {
  return {
    location: position.coords,
    timestamp: position.timestamp
  }
}

export const getCurrentPosition = () : Promise<Position> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => resolve(format(position)),
      (error) => reject(error)
    )
  })
}

export const watchPosition = (success: (position: Position) => void) => {
  return Geolocation.watchPosition(
    (position) => success(format(position)),
  )
}

export const clearWatch = (watchId : number) => {
  return Geolocation.clearWatch(watchId)
}
