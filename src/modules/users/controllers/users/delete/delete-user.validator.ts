import { AppError } from "../../../../../shared/error/app-error";

export function deleteUserValidate(userId: String): void {
  if (!userId) {
    throw new AppError(400, "User ID is required");
  }
}
