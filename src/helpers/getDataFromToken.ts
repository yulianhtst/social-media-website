import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";

export const getDataFromToken = (req: NextRequest) => {
  const token = req.cookies.get("loggedUser")?.value || "";

  const decodedToken = jwt.verify(token, process.env.JWT_LOGIN_SECRET);
  return decodedToken;
};
