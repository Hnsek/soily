import { Realm } from '@realm/react'

export class PlantingMaterial extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  quantity!: number;
  createdAt!:Date;
  
  static schemaName = "PlantingMaterial"

  static generate(data: {name:string, quantity: number}){
    return {
      _id: new Realm.BSON.ObjectId(),
      createdAt: new Date(),
      ...data
    }
  }

  static schema = {
    name: this.schemaName,
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      quantity: "double",
      createdAt: "date"
    },
  };
}
