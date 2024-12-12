import api from "./api";

export const createGullak = async (
  userId,
  name,
  totalAmount,
  initialAmount
) => {
  try {
    const response = await api.post("/gullak/create", {
      userId,
      name,
      total_amt: totalAmount,
      initial_amt: initialAmount, // Send initial amount to backend
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to create Gullak"
    );
  }
};

export const deleteGullak = async (userId, gullakId) => {
  try {
    const response = await api.delete(`/gullak/${userId}/${gullakId}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to delete Gullak"
    );
  }
};
