import axios from "axios";

const API = "https://oj0qx.sse.codesandbox.io";

export const createUser = async (user) => {
  return await axios.post(`${API}/users`, user).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};
