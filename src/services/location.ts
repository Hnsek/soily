import Geolocation, { GeolocationError, GeolocationOptions, GeolocationResponse } from "@react-native-community/geolocation";
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

export const watchPosition = (success: (position: Position) => void, error?: (error: GeolocationError) => void, options?:GeolocationOptions) => {
  return Geolocation.watchPosition(
    (position) => success(format(position)),
    (errorResponse) => error?.(errorResponse),
    options
  )
}

export const clearWatch = (watchId : number) => {
  return Geolocation.clearWatch(watchId)
}
