"use client";

import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-4 auto-rows-[250px] gap-4 w-full">
      <div className="col-span-2 bg-gray-200 rounded-[32px] animate-pulse"></div>

      <div className="bg-gray-200 rounded-[32px] animate-pulse"></div>

      <div className="row-span-2 bg-gray-200 rounded-[32px] animate-pulse"></div>

      <div className="bg-gray-200 rounded-[32px] animate-pulse"></div>

      <div className="bg-gray-200 rounded-[32px] animate-pulse"></div>

      <div className="col-span-1 row-span-2 bg-gray-200 rounded-[32px] animate-pulse"></div>

      <div className="col-span-2 bg-gray-200 rounded-[32px] animate-pulse"></div>

      <div className="row-span-1 col-span-1 bg-gray-200 rounded-[32px] animate-pulse"></div>

      <div className="col-span-2 bg-gray-200 rounded-[32px] animate-pulse"></div>

      <div className="col-span-2 bg-gray-200 rounded-[32px] animate-pulse"></div>
    </div>
  );
};

export default SkeletonLoader;
