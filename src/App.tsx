import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ROUTES } from './utils/constants/router';
import { MainPage } from './pages/ingredients/ingredientsPage';
import { PizzaList } from './pages/pizza/pizzaPage';
import { Cart } from './pages/cart/cartPage';
import { Header } from './components/header/header';

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
