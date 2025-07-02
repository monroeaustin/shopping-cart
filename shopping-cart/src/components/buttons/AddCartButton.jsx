import { MdAdd } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { InventoryContext } from "../../context/InventoryContext";
import CheckInventory from "../Cart/utilties/CheckInventory.js";

function AddCartButton({ sku }) {
  const { setCart, cart } = useContext(CartContext);
  const { inventory } = useContext(InventoryContext);

  const addToCart = () => {
    const matchedItem = CheckInventory(sku, inventory);
    if (matchedItem) {
      setCart((prev) => [...prev, matchedItem]);
    }
  };

  return (
    <button
      onClick={addToCart}
      className="w-8 h-8 flex items-center justify-center bg-[#0F1B4C] text-white rounded-full cursor-pointer"
    >
      <MdAdd size={20} />
    </button>
  );
}

export default AddCartButton;
