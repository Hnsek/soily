export const convertCoordinatesArrayToObject = (coordinates: [longitude: number, lagitude: number][]) => {
  return coordinates.map((coordinate) => ({ longitude: coordinate[0], latitude: coordinate[1]}))
}
