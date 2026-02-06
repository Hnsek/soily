import { create } from "zustand"
import { Planting } from "../../../database/models/planting"

type Action = "harvest" 

type UseHarvestAction = {
  planting?: Planting,
  action: Action | null
  setAction: (planting: Planting, action : Action) => unknown
  resetAction: () => unknown
}


export const useHarvestAction = create<UseHarvestAction>((set) => ({
  planting: undefined,
  action: null,
  setAction:(planting, action) => set((state) => ({ planting, action})),
  resetAction: () => set(() => ({ planting: undefined, action: null}))
}))
