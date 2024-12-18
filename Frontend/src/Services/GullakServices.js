import api from "./api";

export const createGullak = async ({name, totalAmount}) => {
  try {
    const response = await api.post("/gullak/create", {
      name,
      total_amt: totalAmount
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to create Gullak"
    );
  }
};

export const deleteGullak = async (name) => {
  try {
    const response = await api.delete(`/gullak/${name}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to delete Gullak"
    );
  }
};

export const getGullaks = async () => {
  try {
    const response = await api.get("/gullak");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to fetch Gullaks"
    );
  }
};

export const addMoneyApi = async ({name, amount}) => {
  try {
    const response = await api.post("/gullak/addMoney", {
      gullakName: name,
      amount
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to add money"
    );
  }
};
