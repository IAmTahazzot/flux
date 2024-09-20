/**
 * # Routes for middlewares
 *
 * Array of public and private routes for middlewares
 */
export const routes = {
  public: [
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/api(.*)',
  ],
  private: [] // If not in public routes, it's private
};
