import axios from "axios";

const API = "https://oj0qx.sse.codesandbox.io";

export const updateUser = async (user) => {
    console.log("update user",user);
  return await axios.put(`${API}/users/${user._id}`,user).then((response) => {
    //if (response.data.accessToken) {
     // localStorage.setItem("userInfo", JSON.stringify(response.data));
    //}
    return response.data;
  });
};
