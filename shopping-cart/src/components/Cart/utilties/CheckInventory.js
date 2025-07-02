export default function CheckInventory(sku, inventory) {
  const matchedItem = inventory.find((item) => item.sku === sku);

  if (matchedItem) {
    console.log("Found item:", matchedItem);
    return matchedItem;
  } else {
    console.warn("Item not found in inventory");
    return null;
  }
}
