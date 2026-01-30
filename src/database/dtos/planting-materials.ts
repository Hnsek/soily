import { PlantingMaterial } from "../models/planting-material";
import { Realm } from '@realm/react'

type PlantingMaterialKeys = Exclude<keyof PlantingMaterial, keyof Realm.Object>
type PlantingMaterialRemovedKeys = "createdAt" | "_id"

export type CreatePlantingMaterial = Omit<Pick<PlantingMaterial, PlantingMaterialKeys>, PlantingMaterialRemovedKeys>
