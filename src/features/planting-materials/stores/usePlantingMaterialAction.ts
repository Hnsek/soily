import { create } from "zustand"
import { PlantingMaterial } from "../../../database/models/planting-material"

type Action = "planting" 

type UsePlantingMaterial = {
  plantingMaterial: PlantingMaterial | null,
  action: Action | null
  setAction: (plantingMaterial: PlantingMaterial, action : Action) => unknown
}


export const usePlantingMaterialAction = create<UsePlantingMaterial>((set) => ({
  plantingMaterial: null,
  action: null,
  setAction:(plantingMaterial, action) => set((state) => ({ plantingMaterial, action}))
}))
