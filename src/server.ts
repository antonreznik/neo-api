import * as http from "http";
import { connectToDb } from "./shared/Database/connect-to-database";
import Router from "find-my-way";
import { setupUserRoutes } from "./modules/users/routes/user-routes";

async function startServer() {
  await connectToDb();

  const router = Router();
  setupUserRoutes(router);

  const PORT = 3000;

  const server = http.createServer((req, res) => {
    router.lookup(req, res);
  });

  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
