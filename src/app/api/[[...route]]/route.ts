import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

export const runtime = 'edge';

const baseUrl = '/api';

const app = new Hono().basePath(baseUrl);

app.use('*', clerkMiddleware());

app.get('/welcome', async (c) => {
  return c.json({
    message: 'Those are not mountains, those are waves.'
  });
});

app.get('/planet/:name',
  zValidator('param', z.object({
    name: z.string().min(3, { message: 'Planet name at least 3 character long' })
  })),
  async (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({
        message: 'Fuck you bro, you gotta be a member to access this.'
      }, 401);
    }

    const { name } = c.req.valid('param');

    if (name.toLowerCase() === 'earth') {
      return c.json({
        message: 'Welcome to Earth, the only planet known to support life.'
      });
    }

    return c.json({
      message: `Welcome to planet ${name}!`
    });
  });

export const GET = handle(app);
export const POST = handle(app);
