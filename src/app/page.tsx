"use client";

import React from "react";
import { DataForAll, ItemDataProvider } from "@/contexts/ItemDataContext";  // นำเข้า Context และ Provider
import BudgetPanel from "@/components/BudgetPanel";
import BudgetRequestDataTable from "../components/BudgetRequestDataTable";
import Header from "@/components/Navbar";

const PageContent = () => {
  // ใช้ DataForAll เพื่อเข้าถึงข้อมูลจาก Context
  const itemData = DataForAll();

  return (
    <div>
      <main className="container mx-auto">
        <div className="mt-4">
          <BudgetPanel items={itemData} />
        </div>
        <div className="mt-4">
          <BudgetRequestDataTable items={itemData} />
        </div>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <ItemDataProvider>
      <PageContent />
    </ItemDataProvider>
  );
};

export default App;