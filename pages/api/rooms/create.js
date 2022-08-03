import nc from "next-connect";
import { createRoom } from "../../../controllers/roomControllers";
import { auth, adminAuth } from "../../../utils/authMiddlewares";

const handler = nc({
  onError: (err, req, res, next) => {
    res.status(500).json({ msg: err.message });
  },
  onNoMatch: (req, res) => {
    res.status(404).json({ msg: "Page not found" });
  },
});

handler.use(auth).post(createRoom);

export default handler;
