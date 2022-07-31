import nc from "next-connect";
import { auth } from "../../../utils/authMiddlewares";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
  },
  onNoMatch: (req, res) => {
    res.status(404).json({ msg: "Page is not found" });
  },
});

handler.use(auth).get((req, res) => {
  res.status(200).json({ msg: "hello after auth" });
});

export default handler;
