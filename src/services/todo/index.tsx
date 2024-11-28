import axiosInstance from "@/config/api";

export const getTodoList = async (params: any) => {
  const response = await axiosInstance.get('/todos', { params });

  return response?.data;
};