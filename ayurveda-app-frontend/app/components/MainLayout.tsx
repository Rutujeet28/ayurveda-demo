"use client";

import LeftSection from "@/app/components/LeftSection";
import RightSection from "@/app/components/RightSection";

export default function MainLayout() {
  return (
    <div className="flex flex-col bg-gray-10 flex-1">
      <div className="flex flex-1">

        {/* LEFT */}
        <div className="w-[35%] border-r border-gray-300 p-4 bg-white rounded-l-xl">
          <LeftSection />
        </div>

        {/* RIGHT */}
        <div className="w-[65%] p-4 bg-white rounded-r-xl">
          <RightSection />
        </div>

      </div>
    </div>
  );
}
