import { useContext } from "react"
import { CartContext } from "../../../context/CartContext.jsx"

export default function useCartCount() {
  const { cart } = useContext(CartContext);
  return cart.reduce((acc, item) => acc + item.quantity, 0);
}
