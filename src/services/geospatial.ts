import { getPathLength as getPathLengthRoot } from "geolib"
import { GeolibInputCoordinates } from "geolib/es/types"

export const getPathLength = (points: GeolibInputCoordinates[]) => {
  return getPathLengthRoot(points)
}
