"use client";

import React from "react";
import IngredLayout from "../components/IngredientLayout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Ingredient1Page() {
  const details = (
    <div>
      <h2 className="text-lg font-semibold">Basic Info</h2>
      <p>Name: Mediterranean</p>
      <p>Also Known: Meds</p>
      <p>Uses: Healing, Anti-inflammatory</p>
    </div>
  );

  const description = (
    <div>
      <h1 className="text-2xl font-bold mb-4">Neem</h1>
      <p>
        Neem is a key medicinal herb widely used for its antimicrobial and antioxidant properties.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis excepturi sint dolore neque vero. 
        Recusandae exercitationem veniam ratione, similique ea, totam architecto cum repudiandae ut impedit quas ipsa dignissimos non!
      </p>
    </div>
  );

  const nutritionalInfo = (
    <div>
      <h2 className="text-lg font-semibold mb-2">Nutritional Information</h2>
      <ul className="list-disc ml-5">
        <ul className="list-disc ml-5">
        <li>
            Reference: <a href="https://www.dfdfdfldjf.com"className="text-blue-600 underline">www.dfdfdfldjf </a>
        </li>
        <li>
            Research: <a href="https://example.com/paper1" className="text-blue-600 underline">  paper1</a></li>
        <li>
            Reference: <a href="https://www.dfdfdfldjf.com"  className="text-blue-600 underline">www.dfdfdfldjf</a>
        </li>
        <li>
            Research: <a href="https://example.com/paper1"  className="text-blue-600 underline text-blue"> paper1</a>
        </li>
</ul>

      </ul>
    </div>
  );

  const relatedIngredients = (
    <div className="overflow-x-auto flex gap-4 pb-3">
      {["Thymol", "Carvacrol", "Rosmarinic Acid"].map((compound, index) => (
        <div
          key={index}
          className="min-w-[150px] h-40 border rounded-xl bg-white shadow-sm flex flex-col items-center p-2"
        >
          <img
            src={`/images/${compound.toLowerCase().replace(/\s/g, '-')}.jpg`} // image file names like "thymol.jpg"
            alt={compound}
            className="h-24 w-full object-contain"
          />
          <p className="text-sm font-medium mt-2">{compound}</p>
        </div>
      ))}
    </div>
  );

  const imageSlot = (
    <img
      src="/ingredients/i2.png"
      alt="Neem"
      className="w-full h-full object-cover rounded-2xl"
    />
  );

  return (
    <div className="flex flex-col min-h-screen">
        
      <main className="flex-grow">
        <IngredLayout
          details={details}
          description={description}
          nutritionalInfo={nutritionalInfo}
          relatedIngredients={relatedIngredients}
          imageSlot={imageSlot}
        />

      </main>
    </div>
  );
}
