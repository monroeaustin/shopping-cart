import AddCartButton from "../buttons/AddCartButton";
import RemoveCartButton from "../buttons/RemoveCartButton";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard({ img, category, title, reviews, price, sku }) {
  const { cart } = useContext(CartContext);
  const [inputQty, setInputQty] = useState(1);

  const itemInCart = cart.find(item => item.sku === sku);
  const cartQuantity = itemInCart ? itemInCart.quantity : 0;

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value);
    if (val >= 1) setInputQty(val);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all w-[250px] flex flex-col">
      {/* Image */}
      <div className="bg-white p-4 flex justify-center items-center aspect-[4/3]">
        <img src={img} alt={title} className="h-full object-contain" />
      </div>

      {/* Content */}
      <div className="bg-[#FAFAFA] px-4 py-3 flex flex-col justify-between flex-1">
        <div>
          <p className="text-xs text-gray-500 mb-1 lowercase">{category}</p>
          <h3 className="font-semibold text-sm mb-1 line-clamp-2">{title}</h3>
          <div className="flex items-center text-[#FFB23F] text-sm mb-2">
            {Array.from({ length: reviews }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-2">
          <p className="text-lg font-semibold mb-2">${price}</p>

          <div className="flex items-center justify-between gap-2">
            {/* Remove button */}
            <RemoveCartButton sku={sku} />

            {/* Quantity input (shows current quantity from cart) */}
            <input
              type="number"
              min={1}
              value={cartQuantity || inputQty}
              onChange={handleInputChange}
              className="w-12 text-sm text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Add button (adds the `inputQty` amount) */}
            <AddCartButton sku={sku} quantity={inputQty} />

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
