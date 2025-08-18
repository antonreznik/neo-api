import Router from "find-my-way";
import { upsertUserController } from "../controllers/users/upsert/upsert-user.controller";
import { getUserController } from "../controllers/users/get/get-user.controller";
import { getUsersListController } from "../controllers/users/list/get-users-list.controller";
import { deleteUserController } from "../controllers/users/delete/delete-user.controller";
import { globalErrorHandler } from "../../../shared/error/global-error-handler";

export enum UserRoutes {
  UPSERT = "/users/add",
  GET = "/users/:id",
  LIST = "/users",
  DELETE = "/users/:id",
}

export function setupUserRoutes(
  router: Router.Instance<Router.HTTPVersion.V1>
) {
  router.on(
    "POST",
    UserRoutes.UPSERT,
    globalErrorHandler(upsertUserController)
  );
  router.on("GET", UserRoutes.GET, globalErrorHandler(getUserController));

  router.on("GET", UserRoutes.LIST, globalErrorHandler(getUsersListController));

  router.on(
    "DELETE",
    UserRoutes.DELETE,
    globalErrorHandler(deleteUserController)
  );
}
