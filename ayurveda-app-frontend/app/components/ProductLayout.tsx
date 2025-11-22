"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LeftSection from "./LeftSection";

type ProductLayoutProps = {
  details: React.ReactNode;
  description: React.ReactNode;
  additionalInfo?: React.ReactNode;
  relatedProducts?: React.ReactNode;
  imageSlot?: React.ReactNode;
};

export default function ProductLayout({
  details,
  description,
  additionalInfo,
  relatedProducts,
  imageSlot,
}: ProductLayoutProps) {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN FULL-HEIGHT CONTENT (same behavior as MainLayout) */}
      <div className="flex flex-1 max-h-[calc(100vh-140px)]">

        {/* LEFT CHAT SECTION (35%) */}
        <div className="w-[35%] border-r border-gray-300 p-4 bg-white rounded-l-xl overflow-hidden">
          <LeftSection />
        </div>

        {/* RIGHT PRODUCT CONTENT (65%) */}
        <div className="w-[65%] p-6 bg-white rounded-r-xl overflow-y-auto">
          <div className="border rounded-xl bg-white p-6 w-full text-black">

            {/* TOP GRID */}
            <div
              className="
                grid grid-cols-1
                md:grid-cols-[1fr_1.5fr]
                gap-6
              "
            >
              {/* LEFT SIDE: IMAGE + DETAILS */}
              <div className="flex flex-col gap-6">

                {/* IMAGE SLOT */}
                <div
                  className="
                    border rounded-2xl p-4 bg-gray-50
                    flex items-center justify-center
                    aspect-square w-full
                  "
                >
                  {imageSlot}
                </div>

                {/* DETAILS */}
                <div
                  className="
                    border rounded-2xl p-4 h-32 bg-gray-50
                    flex items-center justify-center
                  "
                >
                  {details}
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="h-full flex">
                <div
                  className="
                    border rounded-2xl p-6 bg-gray-50
                    flex-1 text-black
                  "
                >
                  {description}
                </div>
              </div>
            </div>

            {/* ADDITIONAL INFO */}
            {additionalInfo && (
              <div className="mt-10 border rounded-2xl p-6 bg-gray-50 text-black">
                {additionalInfo}
              </div>
            )}

            {/* RELATED PRODUCTS */}
            {relatedProducts && (
              <div className="mt-10 border rounded-2xl p-4 bg-gray-50">
                {relatedProducts}
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
