import { Flag } from "../types/Flag";
import PouchDB from "pouchdb-react-native"

const database = new PouchDB<Flag>("flag")

export const createFlag = (flag: Flag) => database.post(flag)

export const updateFlag = (flag: Flag) => database.put(flag)

export const deleteFlag = (flag: Flag) => database.remove(flag)

export const getFlag = (id: string) => database.get(id)

export const watchFlag = (options?: PouchDB.Core.ChangesOptions) => database.changes(options)
