import axios from "axios";

const API = "https://oj0qx.sse.codesandbox.io";

export const getUserInfo = async (userID) => {
  console.log("getting info:",userID)
  return await axios.get(`${API}/users/${userID}`).then((response) => {
    console.log("from api",response.data);
    //if (response.data.accessToken) {
     // localStorage.setItem("userInfo", JSON.stringify(response.data));
    //}
    return response.data;
  });
};
