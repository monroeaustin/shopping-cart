import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import RemoveCartButton from "../buttons/RemoveCartButton";
import AddCartButton from "../buttons/AddCartButton";

function CartModal({ isOpen, onClose }) {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-transparent bg-opacity-20 z-[900] transition-opacity duration-300 backdrop-blur-sm ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-90 bg-white shadow-lg z-[1000] transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Your Cart</h2>
            <button onClick={onClose} className="text-sm text-gray-500 hover:text-black">
              ✕
            </button>
          </div>

          <ul className="space-y-4 overflow-y-auto flex-1">
            {cart.length === 0 ? (
              <li className="text-gray-500">Cart is empty</li>
            ) : cart.map((item, i) => (
              <li key={i} className="flex items-start justify-between gap-4 border-b border-gray-200 pb-4">
                <img
                  src={item.image_path}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />

                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-semibold text-gray-900">{item.name}</h3>
                    <button className="text-gray-400 hover:text-black text-xl">🗑️</button>
                  </div>

                  <div className="flex items-center mt-2 gap-2">
                    <RemoveCartButton sku={item.sku} />
                    <span className="text-gray-500 px-2 text-sm">{item.quantity}</span>
                    <AddCartButton sku={item.sku} />
                  </div>
                </div>

                <div className="text-sm font-medium text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm text-gray-700">Total</h2>
              <h2 className="text-sm text-gray-900 font-medium">
                ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
              </h2>
            </div>
            <button className="w-full bg-black text-white text-sm font-medium py-3 rounded-md hover:bg-gray-900 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartModal;
