import nc from "next-connect";
import { auth } from "../../../utils/authMiddlewares";
import User from "../../../models/userModels";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
  },
  onNoMatch: (req, res) => {
    res.status(404).json({ msg: "Page is not found" });
  },
});

handler.use(auth).put(async (req, res) => {
  try {
    const user = await User.findById(req.query.userId);
    user.username = req.body.username;
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ msg: "something went wrong" });
  }
});

export default handler;
