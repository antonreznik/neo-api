import { IncomingMessage, ServerResponse } from "http";
import { UserRepository } from "../../../infrastructure/implementation/userRepository";
import { GetUserHandler } from "../../../application/users/get/get-user.handler";
import { extractRouteParams } from "../../../../../utils/requestParser";
import { UserRoutes } from "../../../routes/user-routes";
import { getUserValidate } from "./get-user.validator";
import { UserOutput } from "../../../models/user-output.model";
import { processSuccessResponse } from "../../../../../shared/success/process-success-response";

export async function getUserController(
  req: IncomingMessage,
  res: ServerResponse
) {
  const repository = new UserRepository();
  const handler = new GetUserHandler(repository);
  const routeParams = extractRouteParams(UserRoutes.GET, req.url || "");
  const userId = routeParams.id;

  getUserValidate(userId);

  const result = await handler.execute(userId);
  processSuccessResponse<UserOutput>(res, result);
}
