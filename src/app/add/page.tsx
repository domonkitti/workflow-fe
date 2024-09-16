"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Header from "@/components/Navbar";
import { createBudgetItem } from "@/services/budget-item";
//ขี้เกียจเอาไปไว้ที่อื่นแล้วมันใช้ตรงนี้ที่เดียว
type FormData = {
  title: string;
  quantity: number;
  price: number;
};

function EditBudgetRequest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      quantity: 0,
      price: 0,
    },
  });
  

  const onSubmit = async (data: FormData) => {
    try {
      // แปลง quantity และ price กลับเป็น number ก่อนส่งไปยัง API
      const parsedData = {
        ...data,
        quantity: parseInt(data.quantity.toString(), 10), // แปลง quantity เป็น number
        price: parseFloat(data.price.toString()),         // แปลง price เป็น number
      };
      
      // เรียก API เพื่อส่งข้อมูลที่แปลงแล้ว
      const createdItem = await createBudgetItem(parsedData);
      
      // แสดงข้อความเมื่อสร้าง item สำเร็จ
      alert(`Item created successfully: ${createdItem.title}`);
    } catch (error) {
      // แสดงข้อความเมื่อเกิดข้อผิดพลาด
      alert(`Error creating item: ${error.message}`);
    }
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Edit Budget Request</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-lg font-medium ">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  {...register("title", { required: true, minLength: 3 })}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.title.type === "required" && "Title is required"}
                    {errors.title.type === "minLength" &&
                      "Title must be at least 3 characters"}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-lg font-medium "
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  {...register("quantity", { required: true, min: 1 })}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
                />
                {errors.quantity && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.quantity.type === "required" &&
                      "Quantity is required"}
                    {errors.quantity.type === "min" &&
                      "Quantity must be greater than 0"}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="price" className="block text-lg font-medium ">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  {...register("price", { required: true, min: 1 })}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.price.type === "required" && "Price is required"}
                    {errors.price.type === "min" &&
                      "Price must be greater than 0"}
                  </p>
                )}
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>
                <Link
                  href="/"
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default EditBudgetRequest;