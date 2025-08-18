import { UserEntity } from "../../../domain/users/user.entity";
import { IUserRepository } from "../../../infrastructure/interfaces/IuserRepository";
import { UserOutput } from "../../../models/user-output.model";

export class GetUserHandler {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<UserOutput> {
    const userEntity: UserEntity | null = await this.userRepository.findById(
      id
    );

    return {
      id: userEntity?._id?.toString(),
      email: userEntity?.email,
      firstName: userEntity?.firstName,
      lastName: userEntity?.lastName,
      age: userEntity?.age,
    } as UserOutput;
  }
}
