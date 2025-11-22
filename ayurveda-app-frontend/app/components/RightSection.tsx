import SearchBar from "./SearchBar";
import IngredGrid from "./IngredGrid";

export default function RightSection() {
  
  const products = [
    {
      name: "Neem",
      image: "/ingredients/i2.png",
      category: "Skincare",
      use: "Hydration",
      feature: "Soothing",
      description: "Calms and moisturizes skin.",
      iupacName: "Aloe barbadensis",
      commonName: "Aloe",
      href: "/ingredient/ingredient1"
    },
    {
      name: "Niacinamide",
      image: "/products/p1.jpg",
      category: "Vitamin",
      use: "Brightening",
      feature: "Oil Control",
      description: "Reduces dark spots and redness.",
      iupacName: "Nicotinamide",
      commonName: "Vitamin B3",
      href: "/products/product1",
    },
    // add more items...
    {
      name: "Green Tea",
      image: "/ingredients/i2.png",
      category: "Antioxidant",
      use: "Oil Control",
      feature: "Anti-Aging",
      description: "Protects skin from free radicals.",
      iupacName: "Camellia sinensis",
      commonName: "Green Tea",
      href: "/ingredient/ingredient1"
    },
    {
      name: "Amla",
      image: "/products/p1.jpg",
      category: "Herb",
      use: "Brightening",
      feature: "Vitamin C Rich",
      description: "Improves skin texture and tone.",
      iupacName: "Phyllanthus emblica",
      commonName: "Indian Gooseberry",
      href: "/products/product1"
    },
    {
      name: "Sandalwood",
      image: "/ingredients/i2.png",
      category: "Skincare",
      use: "Calming",
      feature: "Anti-Redness",
      description: "Soothes irritation and reduces redness.",
      iupacName: "Santalum album",
      commonName: "Sandalwood",
      href: "/ingredient/ingredient1"
    },
    {
      name: "Hyaluronic Acid",
      image: "/products/p1.jpg",
      category: "Hydration",
      use: "Moisture Retention",
      feature: "Plumping",
      description: "Deeply hydrates and plumps skin.",
      iupacName: "Hyaluronan",
      commonName: "HA",
      href: "/products/product1",
    },
    {
      name: "Vitamin C",
      image: "/ingredients/i2.png",
      category: "Vitamin",
      use: "Brightening",
      feature: "Collagen Support",
      description: "Evens skin tone and boosts elasticity.",
      iupacName: "Ascorbic Acid",
      commonName: "Vitamin C",
      href:"/products/product1"
    },
    {
      name: "Tea Tree",
      image: "/ingredients/i2.png",
      category: "Essential Oil",
      use: "Acne Care",
      feature: "Purifying",
      description: "Fights acne-causing bacteria.",
      iupacName: "Melaleuca alternifolia",
      commonName: "Tea Tree",
      href: "/products/product1",
    },
    {
      name: "Licorice Root",
      image: "/ingredients/i2.png",
      category: "Brightening",
      use: "Pigmentation",
      feature: "Dark Spot Reduction",
      description: "Helps fade dark spots naturally.",
      iupacName: "Glycyrrhiza glabra",
      commonName: "Licorice Root",
      href: "/ingredient/ingredient1"
    },
    {
      name: "Cucumber Extract",
      image: "/ingredients/i2.png",
      category: "Soothing",
      use: "Hydration",
      feature: "Cooling",
      description: "Hydrates and cools irritated skin.",
      iupacName: "Cucumis sativus",
      commonName: "Cucumber",
      href: "/ingredient/ingredient1"
    },
  ];

  return (
    <div className="p-4 border border-black shadow-inner rounded-xl bg-white h-full flex flex-col">
      
      {/* Header */}
      <div className="bg-gray-200 p-2 px-4 rounded-lg mb-4 mx-auto inline-block">
        <h2 className="text-xl font-semibold text-black text-center">
          Products
        </h2>
      </div>

      {/* Search bar */}
      <div className="mb-6">
        <SearchBar placeholder="Search items..." />
      </div>

      {/* Scrollable Grid Section ONLY */}
      <div className="flex-grow overflow-y-auto max-h-[60vh]">
        <IngredGrid products={products} />
      </div>
    </div>
  );
}
