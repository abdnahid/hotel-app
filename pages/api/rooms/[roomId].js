import nc from "next-connect";
import { getRoomDetails } from "../../../controllers/roomControllers";

const handler = nc({
  onError: (err, req, res, next) => {
    res.status(500).json({ msg: err.message });
  },
  onNoMatch: (req, res) => {
    res.status(404).json({ msg: "Page not found" });
  },
});

handler.get(getRoomDetails);

export default handler;

// const handler = async (req, res) => {
//   const roomId = req.query.roomId;
//   switch (req.method) {
//     case "GET":
//       try {
//         const room = await Room.findById(roomId);
//         if (!room) {
//           res.status(404).json({ message: "no room found with this id" });
//           return;
//         }
//         res.status(200).json({
//           success: true,
//           room,
//         });
//       } catch (error) {
//         res.status(400).json({ message: error.message });
//       }
//       break;
//     case "PATCH":
//       try {
//         const room = await Room.findByIdAndUpdate(roomId, req.body, {
//           new: true,
//         });
//         if (!room) {
//           res.status(404).json({ message: "no room found with this id" });
//           return;
//         } else {
//           res.status(200).json({
//             success: true,
//             room,
//           });
//         }
//         break;
//       } catch (error) {
//         res.status(400).json({ message: error.message });
//       }
//     case "DELETE":
//       try {
//         const room = await Room.findByIdAndDelete(roomId);
//         if (!room) {
//           res.status(404).json({ message: "no room found with this id" });
//           return;
//         }
//         res.status(200).json({
//           success: true,
//           message: "Room data deleted",
//         });
//       } catch (error) {
//         res.status(400).json({ message: error.message });
//       }
//       break;
//     default:
//       break;
//   }
// };
