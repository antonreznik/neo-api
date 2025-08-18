import { IncomingMessage, ServerResponse } from "http";
import { UserRepository } from "../../../infrastructure/implementation/userRepository";
import { extractRouteParams } from "../../../../../utils/requestParser";
import { DeleteUserHandler } from "../../../application/users/delete/delete-user.handler";
import { UserRoutes } from "../../../routes/user-routes";
import { deleteUserValidate } from "./delete-user.validator";
import { processSuccessResponse } from "../../../../../shared/success/process-success-response";
import { DeleteResult } from "mongodb";

export async function deleteUserController(
  req: IncomingMessage,
  res: ServerResponse
) {
  const repository = new UserRepository();
  const handler = new DeleteUserHandler(repository);
  const routeParams = extractRouteParams(UserRoutes.DELETE, req.url || "");
  const userId = routeParams.id;

  deleteUserValidate(userId);
  const result = await handler.execute(userId);
  processSuccessResponse<DeleteResult>(res, result);
}
