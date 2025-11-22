"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LeftSection from "./LeftSection";

type IngredLayoutProps = {
  details: React.ReactNode;
  description: React.ReactNode;
  nutritionalInfo?: React.ReactNode;
  relatedIngredients?: React.ReactNode;
  imageSlot?: React.ReactNode;
};

export default function IngredLayout({
  details,
  description,
  nutritionalInfo,
  relatedIngredients,
  imageSlot,
}: IngredLayoutProps) {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN WRAPPER – FULL HEIGHT LIKE MainLayout */}
      <div className="flex flex-1 max-h-[calc(100vh-140px)]"> 
        {/* 140px = approximate height Nav + Footer, adjust if needed */}

        {/* LEFT SECTION (35%) */}
        <div className="w-[35%] border-r border-gray-300 p-4 bg-white rounded-l-xl overflow-hidden">
          <LeftSection />
        </div>

        {/* RIGHT SECTION (65%) */}
        <div className="w-[65%] p-4 bg-white rounded-r-xl overflow-y-auto">
          <div className="border rounded-xl bg-white p-6 w-full text-black">

            {/* TOP GRID */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
              
              {/* LEFT SIDE */}
              <div className="flex flex-col gap-6">

                {/* IMAGE */}
                <div className="border rounded-2xl p-4 bg-gray-50 flex items-center justify-center aspect-square w-full">
                  {imageSlot}
                </div>

                {/* DETAILS */}
                <div className="border rounded-2xl p-4 h-32 bg-gray-50 flex items-center justify-center">
                  {details}
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="h-full flex">
                <div className="border rounded-2xl p-6 bg-gray-50 flex-1 text-black">
                  {description}
                </div>
              </div>
            </div>

            {/* NUTRITIONAL INFO */}
            {nutritionalInfo && (
              <div className="mt-10 border rounded-2xl p-6 bg-gray-50">
                {nutritionalInfo}
              </div>
            )}

            {/* RELATED INGREDIENTS */}
            {relatedIngredients && (
              <div className="mt-10 border rounded-2xl p-4 bg-gray-50">
                {relatedIngredients}
              </div>
            )}

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
