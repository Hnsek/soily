import { Realm } from '@realm/react'
import { PlantingMaterial } from './planting-material';
import { CreatePlanting } from '../../dtos/planting';

export class Planting extends Realm.Object {
  _id!: Realm.BSON.UUID;
  quantity!:number;
  createdAt!:Date;
  plantingMaterial!: PlantingMaterial;

  static schemaName = "Planting"
  
  static generate(plantingMaterial: CreatePlanting){
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
      quantity: "double",
      createdAt: "date",
      plantingMaterial:PlantingMaterial.schemaName
    },
  };
}

