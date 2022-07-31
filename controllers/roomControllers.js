import Room from "../models/roomModels";
import dbConnect from "../config/dbConnect";

dbConnect();

export const getRooms = async (req, res) => {
  try {
    const searchOptions = JSON.parse(JSON.stringify(req.query));
    const page = Number(req.query.pageNumber) || 1;
    const pageSize = 10;
    console.log("here");
    const roomsCount = await Room.countDocuments({ ...searchOptions });
    const pages = Math.ceil(roomsCount / pageSize);
    const rooms = await Room.find({ ...searchOptions })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    res.status(200).json({ status: "success", rooms, pages, page, roomsCount });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
