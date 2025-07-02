import AddCartButton from "../buttons/AddCartButton";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import RemoveCartButton from "../buttons/RemoveCartButton";
function ProductCard({ img, category, title, reviews, price, sku }) {
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleRemove = () => {
    setCart(prev => prev.filter(item => item.sku !== sku));
  };

  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value);
    if (val >= 1) setQuantity(val);
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
            {/* Quantity input */}
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-12 text-sm text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Add button */}
            <AddCartButton sku={sku} quantity={quantity} />

            <RemoveCartButton sku={sku} quantity={quantity} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
