import { Model } from "@nozbe/watermelondb";
import { FlagModel } from "../../../database/models/flag";

export type Flag = Omit<FlagModel, Exclude<keyof Model, "id"> | "getData">
