import { Realm } from '@realm/react'

export class PlantMaterial extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  quantity!: boolean;

  static schema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      quantity: "double",
    },
  };
}
