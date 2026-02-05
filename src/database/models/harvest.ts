import { Realm } from '@realm/react'
import { Planting } from './planting';
import { CreateHarvest } from '../../dtos/harvest';

export class Harvest extends Realm.Object {
  _id!: Realm.BSON.UUID;
  quantity!:number;
  createdAt!:Date;
  planting!: Planting;

  static schemaName = "Harvest"
  
  static generate(harvest: CreateHarvest){
    return {
      _id: new Realm.BSON.UUID(),
      createdAt: new Date(),
      ...harvest
    }
  }

  static schema = {
    name: this.schemaName,
    primaryKey: '_id',
    properties: {
      _id: 'uuid',
      quantity: "double",
      createdAt: "date",
      planting:Planting.schemaName
    },
  };
}

