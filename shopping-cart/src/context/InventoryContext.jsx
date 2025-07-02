import { createContext, useState, useEffect } from "react";

export const InventoryContext = createContext();

export function InventoryProvider({ children }) {
  const [inventory, setInventory] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [inventoryRes, featuredRes] = await Promise.all([
          fetch('https://furniture-api.fly.dev/v1/products?limit=100'),
          fetch('https://furniture-api.fly.dev/v1/products?featured=true&limit=100'),
        ]);

        const [inventoryData, featuredData] = await Promise.all([
          inventoryRes.json(),
          featuredRes.json(),
        ]);

        const allProducts = Array.isArray(inventoryData) ? inventoryData : inventoryData.data || [];
        const featured = Array.isArray(featuredData) ? featuredData : featuredData.data || [];

        setInventory(allProducts);
        setFeaturedItems(featured);
        setLoading(false);

        console.log("Inventory fetched:", allProducts);
        console.log("Featured items:", featured);
      } catch (err) {
        console.error("Fetch error:", err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <InventoryContext.Provider value={{ inventory, featuredItems, loading }}>
      {children}
    </InventoryContext.Provider>
  );
}
