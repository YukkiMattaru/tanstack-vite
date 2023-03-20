import { RootRoute, Route, Router } from '@tanstack/react-router';

const rootRoute = new RootRoute();

const indexRoute = new Route({ getParentRoute: () => rootRoute, path: '/' });

const routeTree = rootRoute.addChildren([indexRoute]);

const router = new Router({ routeTree });

declare module '@tanstack/router' {
  interface Register {
    router: typeof router;
  }
}

export default router;
