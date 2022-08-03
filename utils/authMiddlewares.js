import { getSession } from "next-auth/react";
import User from "../models/userModels";

//user check
export const auth = async (req, res, next) => {
  const session = await getSession({ req });
  console.log(session);
  if (session) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized");
  }
};

//admin check
export const adminAuth = async (req, res, next) => {
  const session = await getSession({ req });
  const user = await User.findOne({ email: session.user.email });
  console.log(user);
  if (user.isAdmin) {
    next();
  } else {
    res.status(403);
    throw new Error("Only admin can access this");
  }
};
