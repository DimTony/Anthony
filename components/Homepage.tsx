"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home({ portfolio }: { portfolio: any }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`grid grid-cols-4 auto-rows-[250px] gap-4 w-full opacity-0 transition-opacity duration-500 ease-in ${
        isLoaded ? "opacity-100" : ""
      }`}
    >
      <div className="col-span-2 bg-white flex justify-center items-center text-2xl font-bold rounded-[32px] transition-transform duration-300 ease-in hover:translate-y-[-5px] hover:shadow-lg hover:cursor-pointer">
        Item 1
      </div>
      <div
        style={{
          backgroundImage: "url('/map-green.png')",
          backgroundSize: "cover",
        }}
        className="bg-gray-200 flex justify-center items-center text-2xl font-bold rounded-[32px] transition-transform duration-300 ease-in hover:translate-y-[-5px] hover:shadow-lg hover:cursor-pointer"
      >
        Item 2
      </div>
      <div
        style={{
          backgroundImage: "url('/cv-bg.png')",
          backgroundSize: "cover",
        }}
        className="row-span-2 bg-gray-200 flex justify-center items-center text-2xl font-bold rounded-[32px] transition-transform duration-300 ease-in hover:translate-y-[-5px] hover:shadow-lg hover:cursor-pointer"
      >
        Item 3
      </div>
      <div className="bg-white flex justify-center items-center text-2xl font-bold rounded-[32px] transition-transform duration-300 ease-in hover:translate-y-[-5px] hover:shadow-lg hover:cursor-pointer">
        Item 4
      </div>
      <div className="bg-[#6886c5] flex justify-center items-center text-2xl font-bold rounded-[32px] transition-transform duration-300 ease-in hover:translate-y-[-5px] hover:shadow-lg relative">
        Item 5
        <button className="absolute bottom-3 left-3 bg-white border-[0.5rem] border-[#6886c5] text-white text-sm p-3 rounded-full hover:border-[#B4C3E2] transition-all duration-300">
          <ArrowUpRight color="black" />
        </button>
      </div>
      <div
        style={{
          backgroundImage: "url('/project-bg.png')",
          backgroundSize: "cover",
        }}
        className="col-span-1 row-span-2 bg-gray-200 flex justify-center items-center text-2xl font-bold rounded-[32px] transition-transform duration-300 ease-in hover:translate-y-[-5px] hover:shadow-lg hover:cursor-pointer"
      >
        Item 6
      </div>
      <div className="col-span-2  bg-white text-black flex justify-center items-center text-2xl font-bold rounded-[32px] transition-transform duration-300 ease-in hover:translate-y-[-5px] hover:shadow-lg hover:cursor-pointer">
        Item 7
      </div>
      <div className="row-span-1 col-span-1 bg-black text-white flex justify-center items-center text-2xl font-bold rounded-[32px] transition-transform duration-300 ease-in hover:translate-y-[-5px] hover:shadow-lg hover:cursor-pointer">
        Item 8
      </div>
      <div className="col-span-2 bg-white flex justify-center items-center text-2xl font-bold rounded-[32px] transition-transform duration-300 ease-in hover:translate-y-[-5px] hover:shadow-lg hover:cursor-pointer">
        Item 9
      </div>
      <div className="col-span-2 bg-white flex justify-center items-center text-2xl font-bold rounded-[32px] transition-transform duration-300 ease-in hover:translate-y-[-5px] hover:shadow-lg hover:cursor-pointer">
        Item 10
      </div>
    </div>
  );
}
