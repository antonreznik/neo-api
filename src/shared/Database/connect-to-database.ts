import { MongoClient, Db } from "mongodb";

let db: Db;

export async function connectToDb(): Promise<void> {
  if (!db) {
    const url = "mongodb://localhost:27017";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("test");
  }
}

export function getDb(): Db {
  if (!db) {
    throw new Error("Database not connected");
  }
  return db;
}
