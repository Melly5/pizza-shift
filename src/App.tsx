import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { RootPage } from './pages/root';
import { ROUTES } from './utils/constants/router';
import { PizzaList } from './pages/pizzaList';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <RootPage />
  },
  {
    path: ROUTES.PIZZA_LIST,
    element: <PizzaList />
  }
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
