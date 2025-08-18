import { ServerResponse } from "http";

export function processSuccessResponse<T>(res: ServerResponse, data?: T): void {
  res.writeHead(200);
  res.end(JSON.stringify({ success: true, data: data }));
}
