
import { Realm } from '@realm/react'
import { Planting } from '../database/models/planting'

type PlantingKeys = Exclude<keyof Planting, keyof Realm.Object>
type PlantingRemovedKeys = "createdAt" | "_id" | "harvest"

export type CreatePlanting = Omit<Pick<Planting, PlantingKeys>, PlantingRemovedKeys>
