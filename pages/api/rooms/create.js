import dbConnect from "../../../config/dbConnect";
import Room from "../../../models/roomModels";

dbConnect();

const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const room = await Room.create(req.body);
        res.status(200).json({
          success: true,
          room,
        });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
  }
};

export default handler;
