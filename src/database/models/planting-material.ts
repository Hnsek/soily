import { Realm } from '@realm/react'
import { CreatePlantingMaterial } from '../dtos/planting-materials';

export class PlantingMaterial extends Realm.Object {
  _id!: Realm.BSON.UUID;
  name!: string;
  initialQuantity!: number;
  createdAt!:Date;
  
  static schemaName = "PlantingMaterial"

  static generate(plantingMaterial: CreatePlantingMaterial){
    return {
      _id: new Realm.BSON.UUID(),
      createdAt: new Date(),
      ...plantingMaterial
    }
  }

  static schema = {
    name: this.schemaName,
    primaryKey: '_id',
    properties: {
      _id: 'uuid',
      name: 'string',
      initialQuantity: "double",
      createdAt: "date"
    },
  };
}
