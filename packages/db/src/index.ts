import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import { env } from "../env";
import * as auth from "./schema/auth";

export const connectionString = env.POSTGRES_URL;

export const schema = { ...auth };

export * from "drizzle-orm";

const sql = neon(connectionString);

export const db = drizzle(sql, { schema });
