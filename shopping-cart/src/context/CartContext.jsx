import { createContext, useContext, useState } from "react";
import { InventoryContext } from "./InventoryContext.jsx";
export const CartContext = createContext();

export function CartProvider({ children }) {

const {inventory,setInventory} = useContext(InventoryContext)

  const [cart, setCart] = useState([]);


  return (
    <CartContext.Provider value={{ cart,setCart }}>
      {children}
    </CartContext.Provider>
  );
}

