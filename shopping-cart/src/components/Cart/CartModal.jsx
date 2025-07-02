import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartModal({ isOpen, onClose }) {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black bg-opacity-50 z-[900] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-[1000] transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button onClick={onClose} className="text-sm text-gray-500 hover:text-black">
              ✕
            </button>
          </div>

          <ul className="space-y-4 overflow-y-auto flex-1">
            {cart.length === 0 ? (
              <li className="text-gray-500">Cart is empty</li>
            ) : (
              cart.map((item, i) => (
                <li key={i} className="text-sm text-gray-700">
                  {item}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CartModal;
