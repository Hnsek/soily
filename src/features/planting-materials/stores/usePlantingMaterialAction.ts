import { create } from "zustand"
import { PlantingMaterial } from "../../../database/models/planting-material"

type Action = "planting" 

type UsePlantingMaterial = {
  plantingMaterial: PlantingMaterial | null,
  action: Action | null
  setAction: (action : Action, plantingMaterial: PlantingMaterial) => unknown
}


export const usePlantingMaterialAction = create<UsePlantingMaterial>((set) => ({
  plantingMaterial: null,
  action: null,
  setAction:(action, plantingMaterial) => set((state) => ({ plantingMaterial, action}))
}))
