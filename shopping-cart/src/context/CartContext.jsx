import { createContext, useState } from "react";
import ProductCard from "../components/Cards/ProductCard";

export const CartContext = createContext();

export function CartProvider({ children }) {
  
  const [cart, setCart] = useState(["dad"]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
