import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { InventoryContext } from "../../context/InventoryContext";
import CheckInventory from "../Cart/utilties/CheckInventory.js";

function AddCartButton({ sku, quantity = 1 }) {
  const { setCart, cart } = useContext(CartContext);
  const { inventory } = useContext(InventoryContext);

  const addToCart = (sku, quantity) => {
    const matchedItem = CheckInventory(sku, inventory);
    if (!matchedItem) return;

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.sku === sku);
      if (existingItem) {
        return prevCart.map(item =>
          item.sku === sku
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...matchedItem, quantity }];
      }
    });
  };

  return (
    <button
      onClick={() => addToCart(sku, quantity)}
      className="w-6 h-6 border border-gray-300 rounded text-gray-600 text-sm font-bold hover:bg-gray-100"
    >
      +
    </button>
  );
}
export default AddCartButton;