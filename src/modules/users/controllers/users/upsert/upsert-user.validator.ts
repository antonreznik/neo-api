import { AppError } from "../../../../../shared/error/app-error";
import { UserInput } from "../../../models/user-input.model";

export function upsertUserValidae(data: UserInput): void {
  const allEmpty =
    !data.id &&
    !data.email &&
    !data.firstName &&
    !data.lastName &&
    (data.age === undefined || data.age === null || data.age === 0);

  if (allEmpty) {
    throw new AppError(400, "All fields are empty");
  }

  if (!data.firstName?.trim()) {
    throw new AppError(400, "First name is required");
  }

  if (!data.lastName?.trim()) {
    throw new AppError(400, "Last name is required");
  }
}
