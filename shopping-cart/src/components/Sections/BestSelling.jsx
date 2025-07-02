import React, { useState, useContext } from "react";
import ProductCard from "../Cards/ProductCard.jsx";
import { InventoryContext } from "../../context/InventoryContext.jsx";

const categories = ["Garden", "Matress", "TV Tabel", "Lamp", "Mirror"];

function BestSelling() {
  const { featuredItems, loading } = useContext(InventoryContext);
  const [activeCategory, setActiveCategory] = useState("Garden");

  const filteredProducts = featuredItems
    .filter(
      (product) =>
        product?.category?.toLowerCase() === activeCategory.toLowerCase()
    )
    .slice(0, 4);

  return (
    <section className="w-full bg-[#FAFAFA] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Best Selling Product
        </h2>

        {/* Category Tabs */}
        <div className="inline-flex bg-[#F5F5F5] rounded-full p-1 mb-12 space-x-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="flex justify-center gap-8 flex-wrap">
          {loading ? (
            <p>Loading...</p>
          ) : filteredProducts.length === 0 ? (
            <h2>Check back later!</h2>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                img={product.image_path}
                category={product.category}
                title={product.name}
                price={product.price}
                reviews={product.reviews || 5}
                sku={product.sku}
              />
            ))
          )}
        </div>

        {/* View All */}
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-[#E58411] text-sm font-medium hover:underline"
          >
            View All <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default BestSelling;
