import { IncomingMessage, ServerResponse } from "http";
import { UserRepository } from "../../../infrastructure/implementation/userRepository";
import { GetUsersListHandler } from "../../../application/users/list/get-users-list.handler";
import { processSuccessResponse } from "../../../../../shared/success/process-success-response";

export async function getUsersListController(
  req: IncomingMessage,
  res: ServerResponse
) {
  const repository = new UserRepository();
  const handler = new GetUsersListHandler(repository);
  const result = await handler.execute();
  processSuccessResponse(res, { data: result });
}
