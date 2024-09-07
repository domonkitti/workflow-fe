"use client";

import React from "react";
import TableHeader from "@/components/Header"; 
import RenderTable from "@/components/RenderTable";
import StatePrimitive from "@/components/Stateprimitive";



const App = () => {
  const data = [
    {
      id: 1,
      title: "Monitor",
      amount: "$2500.00",
      imageUrl: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    },
    {
      id: 2,
      title: "Hard Disk/SSD",
      amount: "$2000.75",
      imageUrl: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
  ];

  return (
    // <div className="p-6">
    //   <h1 className="text-2xl font-bold mb-4">Product List</h1>
    //   <table className="min-w-full border-collapse bg-white shadow-lg">
      <StatePrimitive />
    //    {/* <TableHeader />
    //    <RenderTable products={data}  /> */}
    //   </table>
    // </div>
  );
};

export default App;