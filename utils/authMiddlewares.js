import { getSession } from "next-auth/react";
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
// export const adminAuth = async (req, res, next) => {
//   if (req.authorizedUser && req.authorizedUser.isAdmin) {
//     next();
//   } else {
//     res.status(401);
//     throw new Error("Not authorized, Only Admin can access this.");
//   }
// };
