import nc from "next-connect";
import { auth } from "../../../utils/authMiddlewares";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

handler.get((req, res) => {
  res.send("Hello world");
});

handler.use(auth).post((req, res) => {
  console.log(req.body);
  res.send("Hello world after auth");
});

export default handler;
