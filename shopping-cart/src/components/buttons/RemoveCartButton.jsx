import { IoRemoveCircle } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { InventoryContext } from "../../context/InventoryContext";
import CheckInventory from "../Cart/utilties/CheckInventory.js";

function RemoveCartButton({ sku, quantity }) {
  const { setCart, cart } = useContext(CartContext);
  const { inventory } = useContext(InventoryContext);

  const removeFromCart = (quantity, sku) => {
    let count = 0;
    const updatedCart = cart.filter(item => {
      if (item.sku === sku && count < quantity) {
        count++;
        return false;
      }
      return true;
    });

    setCart(updatedCart);
  };

  return (
    <button
      onClick={() => removeFromCart(quantity, sku)}
      className="w-8 h-8 flex items-center justify-center bg-[#0F1B4C] text-white rounded-full cursor-pointer"
    >
      <IoRemoveCircle size={20} />
    </button>
  );
}

export default RemoveCartButton;
