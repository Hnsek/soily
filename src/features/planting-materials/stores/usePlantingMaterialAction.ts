import { create } from "zustand"
import { PlantingMaterial } from "../../../database/models/planting-material"

type Action = "planting" 

type UsePlantingMaterial = {
  plantingMaterial?: PlantingMaterial,
  action: Action | null
  setAction: (plantingMaterial: PlantingMaterial, action : Action) => unknown
  resetAction: () => unknown
}


export const usePlantingMaterialAction = create<UsePlantingMaterial>((set) => ({
  plantingMaterial: undefined,
  action: null,
  setAction:(plantingMaterial, action) => set((state) => ({ plantingMaterial, action})),
  resetAction: () => set(() => ({ plantingMaterial: undefined, action: null}))
}))
