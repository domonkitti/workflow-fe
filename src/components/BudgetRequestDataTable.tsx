import { BudgetRequest } from "@/models/budget-request";
import { ChangeItemStatus, DeleteItem } from "@/services/budget-item"; // Import ฟังก์ชัน delete
import { Pencil } from "lucide-react";
import { title } from "process";
import { useState, useEffect } from "react";

interface BudgetRequestDataTableProps {
  items: BudgetRequest[];
}

function BudgetRequestDataTable({ items }: BudgetRequestDataTableProps) {
  const [currentItems, setCurrentItems] = useState<BudgetRequest[]>([]);

  useEffect(() => {
    setCurrentItems(items);
  }, [items]);

  const handleStatusChange = async (id: number, newStatus: "APPROVED" | "REJECTED") => {
    try {
      const newstatus = { status: newStatus };
      const updatedItem = await ChangeItemStatus(id, newstatus);
      alert(`Status updated to ${updatedItem.status}`);

      const updatedItems = currentItems.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      );

      setCurrentItems(updatedItems);
    } catch (error: any) {
      alert(`เปลี่ยนสถานะไม่สำเร็จ: ${JSON.stringify(error.response.data.message)}`);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await DeleteItem(id);
      alert(`${id} ${title} ถูกลบแล้ว`);

      // ลบ item ที่ถูกลบออกจาก currentItems
      const updatedItems = currentItems.filter((item) => item.id !== id);
      setCurrentItems(updatedItems);
    } catch (error: any) {
      alert(`ลบไม่สำเร็จ: ${JSON.stringify(error.response.data.message)}`);
    }
  };

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr className="">
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"></th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Id</th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">ราคา</th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Budget</th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">รวมเป็นเงิน</th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
          <th className="px-6 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
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
              <button
                onClick={() => handleDelete(request.id)}
                className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-gray-600"
              >
                Delete
              </button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-middle">{request.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="font-normal">{request.title}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-middle">{request.quantity}</td>
            <td className="px-6 py-4 whitespace-nowrap text-middle">{request.price}</td>
            <td className="px-6 py-4 whitespace-nowrap text-middle">{request.price * request.quantity}</td>
            <td className="px-6 py-4 whitespace-nowrap text-middle">{request.status}</td>
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
