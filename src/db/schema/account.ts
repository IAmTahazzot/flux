import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const account = pgTable('account', {
  id: serial('id').primaryKey(),
  plaidId: text('plaidId').notNull(),
  user_id: varchar('user_id', { length: 255 }).unique().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  account_id: varchar('account_id', { length: 255 }).unique().notNull(),
  created_at: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
});

export const insertAccountSchema = createInsertSchema(account);
