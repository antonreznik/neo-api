import { IncomingMessage } from "http";
import getRawBody from "raw-body";

async function parseJSON(req: IncomingMessage): Promise<any> {
  const body = await getRawBody(req, {
    encoding: "utf-8",
    length: req.headers["content-length"],
  });

  return JSON.parse(body);
}

function extractRouteParams(pathTemplate: string, actualPath: string) {
  const keys = pathTemplate.split("/");
  const values = actualPath.split("/");
  const params: Record<string, string> = {};

  keys.forEach((key, index) => {
    if (key.startsWith(":")) {
      params[key.slice(1)] = values[index];
    }
  });

  return params;
}

export { parseJSON, extractRouteParams };
