import { api } from "@/lib/api";
import { AddBudget, BudgetRequest } from "@/models/budget-request";
import axios from "axios";


interface LoginInput {
  username: string;
  password: string;
}

export const Login = async (body: LoginInput): Promise<any> => {
  const response = await api.post("/login", body, { withCredentials: true });
  return response;
};
// -------------------------------------



interface CreateResult {
  data: BudgetRequest;
  error:[]
}
//ไม่ต้องแนบ cookie
export const createBudgetItem = async (body: AddBudget): Promise<BudgetRequest> => {
  const response = await api.post<CreateResult>("http://localhost:2024/items", body);
  const { data } = response.data;
  return data;
};
