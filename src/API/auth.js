import API from "./axios";

// LOGIN
export const loginUser = async (identifier, password) => {
   res = await API.post("/accounts/login/", {
    username: identifier,
    password: password,
  });

  // save tokens
  localStorage.setItem("access", res.data.access);
  localStorage.setItem("refresh", res.data.refresh);

  return res.data;
};


// REGISTER 
export const registerUser = async (data) => {
  const res = await API.post("/accounts/register/", data);
  return res.data;
};


// LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};