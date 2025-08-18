import { DeleteResult } from "mongodb";
import { UserEntity } from "../../domain/users/user.entity";

export interface IUserRepository {
  findById(id: string): Promise<UserEntity | null>;
  upsert(user: UserEntity): Promise<string | null>;
  list(): Promise<UserEntity[]>;
  delete(id: string): Promise<DeleteResult>;
}
