import { IncomingMessage, ServerResponse } from "http";
import { AppError } from "./app-error";

export function globalErrorHandler(
  controller: (req: IncomingMessage, res: ServerResponse) => Promise<void>
) {
  return async (req: IncomingMessage, res: ServerResponse) => {
    try {
      await controller(req, res);
    } catch (err: any) {
      res.statusCode = err.statusCode || 500;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({ error: err.message || "Internal Server Error" })
      );
    }
  };
}
