import { create } from "zustand"
import { Planting } from "../../../database/models/planting"

type Action = "harvest" 

type UseHarvestAction = {
  planting?: Planting,
  action: Action | null
  setAction: (plantingMaterial: Planting, action : Action) => unknown
  resetAction: () => unknown
}


export const useHarvestAction = create<UseHarvestAction>((set) => ({
  planting: undefined,
  action: null,
  setAction:(plantingMaterial, action) => set((state) => ({ planting: plantingMaterial, action})),
  resetAction: () => set(() => ({ planting: undefined, action: null}))
}))
