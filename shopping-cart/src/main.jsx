import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { InventoryProvider } from './context/InventoryContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InventoryProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </InventoryProvider>
  </StrictMode>
);
