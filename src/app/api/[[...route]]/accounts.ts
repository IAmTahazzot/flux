import { db } from '@/db';
import { account } from '@/db/schema/account';
import { getAuth } from '@hono/clerk-auth';
import { Hono } from 'hono';

export const accounts = new Hono()
  .get('/', async (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const data = await db.select().from(account);

    return c.json({
      data,
    });
  })
  .post('/', async (c) => {
    return Response.json({ error: 'Not implemented' });
  });
