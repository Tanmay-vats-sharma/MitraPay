import api from "./api";

export const getUserDetails = async (Phone_no) => {
    console.log(Phone_no);
  try {
    const response = await api.get(`/user/${Phone_no}`);
    return response.data.user;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to fetch User Details"
    );
  }
};

export const getProfile = async () => {
  try {
    const response = await api.get("/user/profile");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to fetch Profile"
    );
  }
};

export const updateProfile = async (formData) => {
  try {
    const response = await api.post("/user/update", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to update Profile"
    );
  }
};

