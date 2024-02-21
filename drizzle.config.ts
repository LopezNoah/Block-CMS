import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/models/schema.ts',
  out: './drizzle',
  driver: 'better-sqlite',
  dbCredentials: {
    url:
      process.env.NODE_ENV === 'production'
        ? '/data/main.db'
        : './main.db'
  }
} satisfies Config;