import { Harvest } from "../database/models/harvest"

type HarvestKeys = Exclude<keyof Harvest, keyof Realm.Object>
type HarvestRemovedKeys = "createdAt" | "_id"

export type CreateHarvest = Omit<Pick<Harvest, HarvestKeys>, HarvestRemovedKeys>
