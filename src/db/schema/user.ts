import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  user_id: varchar('user_id').unique().notNull().primaryKey(), // clerk user_id will be used here for simplicity
  username: varchar('username').unique().notNull(),
  name: varchar('name').notNull(),
  email: varchar('email').unique().notNull(),
  created_at: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'date' })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});
