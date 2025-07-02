import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { CartProvider } from './context/CartContext.jsx';
import { InventoryProvider } from './context/InventoryContext.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/Home/Home.jsx';
import ShopPage from './pages/Home/Shop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InventoryProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </InventoryProvider>
  </StrictMode>
);
