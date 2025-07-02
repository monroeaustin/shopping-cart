import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function RemoveCartButton({ sku }) {
  const { setCart, cart } = useContext(CartContext);

  const removeFromCart = (sku) => {
    setCart(prevCart => {
      return prevCart
        .map(item =>
          item.sku === sku
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
    });
  };

  return (
    <button
      onClick={() => removeFromCart(sku)}
      className="w-6 h-6 border border-gray-300 rounded text-gray-600 text-sm font-bold hover:bg-gray-100"
    >
      –
    </button>
  );
}

export default RemoveCartButton;
