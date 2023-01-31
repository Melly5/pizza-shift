import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ROUTES } from './utils/constants/router';
import { MainPage } from './pages/main/root';
import { PizzaList } from './pages/pizzaList/pizzaList';
import { Cart } from './pages/cart/cart';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <MainPage />
  },
  {
    path: ROUTES.PIZZA_LIST,
    element: <PizzaList />
  },
  {
    path: ROUTES.CART,
    element: <Cart />
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
