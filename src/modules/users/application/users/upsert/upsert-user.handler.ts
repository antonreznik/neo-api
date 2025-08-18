import { ObjectId } from "mongodb";
import { UserEntity } from "../../../domain/users/user.entity";
import { IUserRepository } from "../../../infrastructure/interfaces/IuserRepository";
import { UserInput } from "../../../models/user-input.model";

export class UpsertUserHandler {
  constructor(private userRepository: IUserRepository) {}

  async execute(userInput: UserInput): Promise<string | null> {
    const entity: UserEntity = {
      _id: userInput.id ? new ObjectId(userInput.id) : new ObjectId(),
      email: userInput.email,
      firstName: userInput.firstName,
      lastName: userInput.lastName,
      age: userInput.age,
    };

    const result = await this.userRepository.upsert(entity);
    return result;
  }
}
