import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

export const psql = neon(process.env.DATABASE_URL!);
export const db = drizzle(psql);
