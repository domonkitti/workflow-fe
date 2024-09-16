import { api } from "@/lib/api";
import { BudgetRequest } from "@/models/budget-request";

interface FetchBudgetItemsResponse {
  data: BudgetRequest[];
}

export const fetchBudgetItems = async (): Promise<BudgetRequest[]> => {
  // ดึงค่า Query Parameters จาก URL ปัจจุบัน
  const queryString = window.location.search; // เช่น "?status=APPROVED"

  // เรียกใช้ API โดยเพิ่ม Query Parameters เข้าไปใน URL
  const response = await api.get<FetchBudgetItemsResponse>(`/items/${queryString}`);
  const { data } = response.data;
  return data;
};
//--------------------------------------
export const fetchfilteredBudgetItems = async (queryParams?: Record<string, string | number>): Promise<BudgetRequest[]> => {
  const response = await api.get<FetchBudgetItemsResponse>("/items", {
    params: queryParams, // ส่ง query parameters เข้าไปที่นี่
  });
  
  const { data } = response.data;
  return data;
};

// -------------------------------------

interface CreateBudgetItemRequest {
  title: string;
  quantity: number;
  price: number;
}

interface CreateBudgetItemResponse {
  data: BudgetRequest;
}

export const createBudgetItem = async (body: CreateBudgetItemRequest): Promise<BudgetRequest> => {
  const response = await api.post<CreateBudgetItemResponse>("/items/", body);
  const { data } = response.data;
  return data;
};
