import { Realm } from '@realm/react'
import { PlantingMaterial } from '../database/models/planting-material'

type PlantingMaterialKeys = Exclude<keyof PlantingMaterial, keyof Realm.Object>
type PlantingMaterialRemovedKeys = "createdAt" | "_id"

export type CreatePlantingMaterial = Omit<Pick<PlantingMaterial, PlantingMaterialKeys>, PlantingMaterialRemovedKeys>
