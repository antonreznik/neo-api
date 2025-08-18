import { IUserRepository } from "../../../infrastructure/interfaces/IuserRepository";
import { UserOutput } from "../../../models/user-output.model";

export class GetUsersListHandler {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<UserOutput[]> {
    const list = await this.userRepository.list();

    const data = list.map(
      (userEntity) =>
        ({
          id: userEntity?._id?.toString(),
          email: userEntity?.email,
          firstName: userEntity?.firstName,
          lastName: userEntity?.lastName,
          age: userEntity?.age,
        } as UserOutput)
    );

    return data;
  }
}
