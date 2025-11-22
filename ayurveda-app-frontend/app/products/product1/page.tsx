"use client";

import ProductLayout from "@/app/components/ProductLayout";

export default function Product1Page() {
  const related = [
    { id: 1, name: "Garlic Oil", image: "/products/p1.jpg" },
    { id: 2, name: "Herbal Cleanser", image: "/products/p1.jpg" },
    { id: 3, name: "Neem Soap", image: "/products/p1.jpg" },
    { id: 4, name: "Amla Shampoo", image: "/products/p1.jpg" },
    { id: 5, name: "Vitamin C Serum", image: "/products/p1.jpg" },
    { id: 6, name: "Green Tea Toner", image: "/products/p1.jpg" },
    { id: 7, name: "Essential Oil Blend", image: "/products/p1.jpg" },
    { id: 8, name: "Saffron Cream", image: "/products/p1.jpg" },
    { id: 9, name: "Aloe Vera Gel", image: "/products/p1.jpg" },
    { id: 10, name: "Rose Water Mist", image: "/products/p1.jpg" },
  ];

  return (
    <div className="w-full">
      <ProductLayout
        imageSlot={
          <img
            src="/products/p1.jpg"
            alt="Product 1"
            className="h-full w-full object-contain"
          />
        }
        details={<p className="text-lg font-semibold">Product 1 Details</p>}
        description={
          <>
            <h2 className="text-xl font-bold mb-2">Product 1 Description</h2>
            <p className="text-gray-600">
              This product is amazing because... (your text here)
            </p>
          </>
        }
        relatedProducts={
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">
              Similar Products
            </h3>

            <div className="flex overflow-x-auto gap-4 pb-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {related.map((product) => (
                <div
                  key={product.id}
                  className="
                        min-w-[160px] h-48
                        border rounded-xl shadow-md
                        flex flex-col items-center p-3
                        transition-all duration-300
                        hover:shadow-xl hover:scale-105 hover:border-gray-400
                        animate-gradient-slow
                  "
                >
                  {/* Product Image */}
                  <div className="w-full h-28 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Product Name */}
                  <p className="text-sm font-medium mt-3 text-gray-700">
                    {product.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
}
