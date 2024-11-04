import { db } from '@/db';
import { account, insertAccountSchema } from '@/db/schema/account';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';
import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { v4 } from 'uuid';

export const accounts = new Hono()
  .get('/', clerkMiddleware(), async (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const data = await db.select().from(account);

    return c.json({
      data,
    });
  })
  .post(
    '/',
    clerkMiddleware(),
    zValidator('json', insertAccountSchema.pick({ name: true })),
    async (c) => {
      const auth = getAuth(c);

      if (!auth?.userId) {
        return c.json({ error: 'Unauthorized' }, 401);
      }

      const values = c.req.valid('json');

      const data = await db
        .insert(account)
        .values({
          user_id: auth.userId,
          ...values
        })
        .returning();

      return c.json({
        data,
      });
    },
  );
