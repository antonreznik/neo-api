import { DeleteResult } from "mongodb";
import { IUserRepository } from "../../../infrastructure/interfaces/IuserRepository";

export class DeleteUserHandler {
  constructor(private userRepository: IUserRepository) {}

  execute(id: string): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
