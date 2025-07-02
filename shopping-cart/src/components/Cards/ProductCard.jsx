import AddCartButton from "../buttons/AddCartButton"; 

function ProductCard({ img, category, title, reviews, price,sku }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all w-[250px] flex flex-col">
      {/* Image */}
      <div className="bg-white p-4 flex justify-center items-center aspect-[4/3]">
        <img
          src={img}
          alt={title}
          className="h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="bg-[#FAFAFA] px-4 py-3 flex flex-col justify-between flex-1">
        <div>
          <p className="text-xs text-gray-500 mb-1 lowercase">{category}</p>
          <h3 className="font-semibold text-sm mb-1 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center text-[#FFB23F] text-sm mb-2">
            {Array.from({ length: reviews }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <p className="text-lg font-semibold">${price}</p>
          <AddCartButton sku={sku} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
