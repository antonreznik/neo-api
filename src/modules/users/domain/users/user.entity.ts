import { ObjectId } from "mongodb";

export interface UserEntity {
  _id: ObjectId;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
}
