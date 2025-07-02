import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FiTrash2 } from "react-icons/fi";

function RemoveCartButton({ sku, removeALL = false }) {
  const { setCart } = useContext(CartContext);

  const removeFromCart = () => {
    setCart(prevCart => {
      if (removeALL) {
        return prevCart.filter(item => item.sku !== sku); // Remove entire item
      } else {
        return prevCart
          .map(item =>
            item.sku === sku
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0);
      }
    });
  };

  return (
    <button
      onClick={removeFromCart}
      className={`flex items-center justify-center text-gray-600 hover:text-black transition ${
        removeALL
          ? "w-6 h-6"
          : "w-6 h-6 border border-gray-300 rounded text-sm font-bold hover:bg-gray-100"
      }`}
      title={removeALL ? "Remove item" : "Decrease quantity"}
    >
      {removeALL ? <FiTrash2 size={16} /> : "–"}
    </button>
  );
}

export default RemoveCartButton;
