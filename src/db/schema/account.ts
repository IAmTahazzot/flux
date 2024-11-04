import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const account = pgTable('account', {
  account_id: serial('account_id').primaryKey(),
  plaidId: varchar('plaidId'),
  user_id: varchar('user_id').unique().notNull(),
  name: varchar('name').notNull(),
  created_at: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
});

export const insertAccountSchema = createInsertSchema(account);
