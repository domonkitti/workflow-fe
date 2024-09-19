"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { BudgetRequest } from '@/models/budget-request';
import { LookAtItem } from '@/services/budget-item';



function TestComponent() {
  const params = useParams();
  const id = params.id;
  const [itemData, setItemData] = useState<BudgetRequest[]>([]);

  useEffect(() => {
    LookAtItem(id).then(setItemData).catch((error) => {
      console.error("Failed to fetch items", error);
    });
  }, [id]);
  

  return (
    <div>
      <h1>ข้อมูลสำหรับ ID: {id}</h1>
      {itemData.map((item) => (
        <div key={item.id}>
          <p>ชื่อเรื่อง: {item.title}</p>
          <p>จำนวน: {item.quantity}</p>
          <p>จำนวนเงิน: {item.price}</p>
          {/* แสดงฟิลด์อื่น ๆ ตามที่มี */}
        </div>
      ))}
    </div>
  );
}

export default TestComponent;
