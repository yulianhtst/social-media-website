import axios from "axios";

type LoginArgs = {
  email: string;
  password: string;
};

export const login = async (userCredentials: LoginArgs) => {

  const user = await axios.post(
    `http://localhost:3000/api/auth/login`,
    userCredentials
  );
  return user.data;
};

export const logout = () => {
  localStorage.removeItem("auth");
  document.cookie =
    "loggedUser" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
