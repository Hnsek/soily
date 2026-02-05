
import { Planting } from "../../../database/models/planting"
import { useQuery } from "@realm/react"


export const usePlantings = () => {
  const plantings = useQuery(Planting)
  return {
    plantings: plantings as unknown as Planting[],
  }

}
