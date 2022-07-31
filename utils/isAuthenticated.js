import { getSession } from "next-auth/react";

const isAuthenticated = async (req, res, next) => {
  const session = getSession({ req });
  if (!session) {
    throw new Error("Not authenticated");
  } else {
    next();
  }
};

export default isAuthenticated;
