import { db } from '@/db';
import { account } from '@/db/schema/account';
import { Hono } from 'hono';

export const accounts = new Hono().get('/', async (c) => {
  const data = await db.select().from(account);

  return c.json({
    data,
  });
});
