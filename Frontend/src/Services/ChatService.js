import api from "./api";

export const createContact = async (Phone_no) => {
  try {
    const response = await api.post("/chat/create", {
      Phone_no
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Already a Contact"
    );
  }
};

export const getContacts = async () => {
  try {
    const response = await api.get("/chat");
    return response.data.contacts;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to fetch Contacts"
    );
  }
};

export const getMessages = async (contactId) => {
  try {
    const response = await api.get(`/chat/${contactId}`);
    return response.data.messages;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to fetch Messages"
    );
  }
};

export const sendMessage = async (contactId, message) => {
    try {
        const response = await api.post(`/chat/send/${contactId}`, {
        content: message,
        });
        return response.data;
    } catch (error) {
        throw new Error(
        error.response?.data?.error?.message || "Failed to send Message"
        );
    }
};
