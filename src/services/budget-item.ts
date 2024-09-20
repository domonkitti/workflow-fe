import { api } from "@/lib/api";
import { BudgetRequest } from "@/models/budget-request";

interface FetchBudgetItemsResponse {
  data: BudgetRequest[];
}
//---------------ดูทั้งหมด+เซิจ
export const fetchBudgetItems = async (): Promise<BudgetRequest[]> => {
  const queryString = window.location.search;
  // เรียกใช้ API โดย เรียก querry param ผ่าน url
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
//--------------------------------------ดูของหน้าแก้ไข
export const LookAtItem = async (id: any): Promise<BudgetRequest[]> => {
  const response = await api.get<FetchBudgetItemsResponse>(`/items/${id}`);
  const { data } = response.data;
  console.log(data);

  // แปลงข้อมูลให้เป็นอาร์เรย์เสมอ
  const dataArray = Array.isArray(data) ? data : [data];

  return dataArray;
};
//-------------------------------------อัพเดทข้อมูล
interface UpdateItemRequest {
  title: string;
  quantity: number;
  price: number;
}

interface CreateBudgetItemResponse {
  data: BudgetRequest;
}

export const UpdateItem = async (body: UpdateItemRequest,id:any): Promise<BudgetRequest> => {
  const response = await api.put<CreateBudgetItemResponse>(`/items/${id}`, body);
  const { data } = response.data;
  return data;
};


// ------------------------------------เพิ่งข้อมูล

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

// ------------------------------------แก้ status

interface changestatus {
  status: "APPROVED" | "REJECTED" 
}



export const ChangeItemStatus = async (id :number, body: changestatus): Promise<BudgetRequest> => {
  const response = await api.patch(`/items/${id}`, body);
  const { data } = response.data;
  return data;
};
// ------------------------------------ลบ
export const DeleteItem = async (id :number): Promise<BudgetRequest> => {
  const response = await api.delete(`/items/${id}`);
  const { data } = response.data;
  return data;
};