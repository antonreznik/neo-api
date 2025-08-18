import { DeleteResult, ObjectId } from "mongodb";
import { getDb } from "../../../../shared/Database/connect-to-database";
import { UserEntity } from "../../domain/users/user.entity";
import { IUserRepository } from "../interfaces/IuserRepository";

export class UserRepository implements IUserRepository {
  private db = getDb();

  async findById(id: string): Promise<UserEntity | null> {
    const user = await this.db
      .collection("users")
      .findOne({ _id: new ObjectId(id) });
    return user as UserEntity | null;
  }

  async upsert(user: UserEntity): Promise<string | null> {
    const result = await this.db
      .collection("users")
      .updateOne({ _id: user._id }, { $set: user }, { upsert: true });

    return result.upsertedId?.toString() || null;
  }

  async list(): Promise<UserEntity[]> {
    const users = await this.db.collection("users").find({}).toArray();
    return users as UserEntity[];
  }

  delete(id: string): Promise<DeleteResult> {
    return this.db.collection("users").deleteOne({ _id: new ObjectId(id) });
  }
}
