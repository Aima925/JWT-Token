import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "./drizzle";
await migrate(db, { migrationsFolder: "drizzle" });