import { formatDecimal } from "@/lib/format-decimal";
import { BudgetRequest } from "@/models/budget-request";
import { ChangeItemStatus } from "@/services/budget-item";
import { Pencil } from "lucide-react";
import { useState, useEffect } from "react";

interface BudgetRequestDataTableProps {
  items: BudgetRequest[];
}

function BudgetRequestDataTable({ items }: BudgetRequestDataTableProps) {
  // ใช้ useState เพื่อเก็บ items ในตัว component
  const [currentItems, setCurrentItems] = useState<BudgetRequest[]>([]);

  // อัปเดต currentItems เมื่อ items จาก props เปลี่ยนแปลง
  useEffect(() => {
    setCurrentItems(items);
  }, [items]);

  const handleStatusChange = async (id: number, newStatus: "APPROVED" | "REJECTED") => {
    try {
      const newstatus = { status: newStatus }; // สร้าง object changestatus ที่ถูกต้อง
      const updatedItem = await ChangeItemStatus(id, newstatus); // ส่ง object changestatus ไปที่ API
      alert(`Status updated to ${updatedItem.status}`);

      // อัปเดตสถานะของ item ที่ถูกเปลี่ยน
      const updatedItems = currentItems.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      );

      // อัปเดต state เพื่อ re-render component
      setCurrentItems(updatedItems);
    } catch (error) {
      alert("Failed to update status");
    }
  };

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr className="">
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"></th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Id
          </th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            ราคา
          </th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Budget
          </th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            รวมเป็นเงิน
          </th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {currentItems.map((request) => (
          <tr key={request.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <button className="text-gray-600 hover:text-blue-600">
                <a href={`/edit/${request.id}`} className="text-gray-600 hover:text-blue-600">
                  <Pencil className="h-4 w-4" />
                </a>
              </button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-middle">
              {request.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="font-normal">{request.title}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-middle">
              {request.quantity}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-middle">
              {request.price}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-middle">
              {request.price * request.quantity}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-middle">
              {request.status}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-middle">
              {request.status === "APPROVED" ? (
                <button
                  onClick={() => handleStatusChange(request.id, "REJECTED")}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Change to REJECTED
                </button>
              ) : (
                <button
                  onClick={() => handleStatusChange(request.id, "APPROVED")}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Change to APPROVED
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BudgetRequestDataTable;
