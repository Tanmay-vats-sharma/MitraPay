import api from "./api";

export const getTransactions = async () => {
  try {
    const response = await api.get("/viewTransactions");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to fetch Transactions"
    );
  }
};

export const PayMoney = async ({email,Phone_no, amount}) => {
  try {
    const response = await api.post("/pay", {
      email,
      Phone_no,
      amount
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to Pay Money"
    );
  }
};
