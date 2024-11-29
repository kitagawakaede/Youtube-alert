import type { Config } from "drizzle-kit";

import { connectionString } from "./src/index";

export default {
  schema: "./src/schema",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: { url: connectionString },
} satisfies Config;
