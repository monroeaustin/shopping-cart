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
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[900] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-xl z-[1000] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
          </div>

          {/* Items */}
          <ul className="space-y-6 overflow-y-auto flex-1 pr-2">
            {cart.length === 0 ? (
              <li className="text-gray-500">Cart is empty</li>
            ) : (
              cart.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  {/* Image */}
                  <img
                    src={item.image_path}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                  />

                  {/* Details and Controls */}
                  <div className="flex flex-col flex-1 justify-between">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 leading-5">
                          {item.name}
                        </h3>
                        {item.wood_type && (
                          <p className="text-xs text-gray-400">{item.wood_type}</p>
                        )}
                      </div>
                        <RemoveCartButton sku={item.sku} removeALL />

                    </div>

                    {/* Qty Controls */}
                    <div className="flex items-center gap-2">
                      <RemoveCartButton sku={item.sku} />
                      <span className="text-sm text-gray-700">{item.quantity}</span>
                      <AddCartButton sku={item.sku} />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-sm font-semibold text-gray-800 whitespace-nowrap pl-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </li>
              ))
            )}
          </ul>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-700">Total</span>
              <span className="text-sm font-semibold text-gray-900">
                ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-black text-white text-sm font-medium py-3 rounded-md hover:bg-gray-900 transition">
              Proceed to Checkout
            </button>
          </div>
            <div className="text-2xl text-neutral-700 hover:text-black transition-all">
      </div>
        </div>
      </div>
    </>
  );
}

export default CartModal;
