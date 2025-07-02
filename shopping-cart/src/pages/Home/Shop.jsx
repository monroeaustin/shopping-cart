
import Hero from "../../components/Hero/Hero.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Sections/Footer.jsx";
import ProductCard from "../../components/Cards/ProductCard.jsx";
import { useContext } from "react";
import { InventoryContext } from "../../context/InventoryContext.jsx";

function ShopPage() {
  const { inventory, loading } = useContext(InventoryContext);

  const sampleProducts = inventory?.slice(0, 10) || [];

  return (
    <>
      <Header />

      <section className="max-w-7xl mx-auto px-6 py-12 pt-24">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">All Products</h2>

        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sampleProducts.map((product) => (
              <ProductCard
                key={product.id}
                img={product.image_path}
                category={product.category}
                title={product.name}
                price={product.price}
                reviews={product.reviews || 5}
                sku={product.sku}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
export default ShopPage;