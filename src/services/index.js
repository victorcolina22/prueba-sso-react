import { ERROR_CODES, GET_SESSION_EP } from "../constants";

export const getSessionToken = async (uuid) => {
  try {
    const response = await fetch(`${GET_SESSION_EP}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uuid }),
    });

    if (ERROR_CODES.includes(response.status)) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
};
