import { IncomingMessage, ServerResponse } from "http";
import { UserRepository } from "../../../infrastructure/implementation/userRepository";
import { UpsertUserHandler } from "../../../application/users/upsert/upsert-user.handler";
import { UserInput } from "../../../models/user-input.model";
import { parseJSON } from "../../../../../utils/requestParser";
import { upsertUserValidae } from "./upsert-user.validator";
import { processSuccessResponse } from "../../../../../shared/success/process-success-response";
import { ObjectId } from "mongodb";

export async function upsertUserController(
  req: IncomingMessage,
  res: ServerResponse
) {
  const repository = new UserRepository();
  const handler = new UpsertUserHandler(repository);

  const requestBody = await parseJSON(req);

  const data: UserInput = {
    id: requestBody.id,
    email: requestBody.email,
    firstName: requestBody.firstName,
    lastName: requestBody.lastName,
    age: requestBody.age,
  };

  upsertUserValidae(data);
  const result = await handler.execute(data);

  processSuccessResponse(res, { id: result });
}
