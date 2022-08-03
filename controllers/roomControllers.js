import Room from "../models/roomModels";
import dbConnect from "../config/dbConnect";

//@desc get all rooms from the database
//@POST api/rooms
//@access public
export const getRooms = async (req, res) => {
  dbConnect();
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
//@desc get current room from the database
//@POST api/rooms/:id
//@access public
export const getRoomDetails = async (req, res) => {
  dbConnect();
  const roomId = req.query.roomId;
  try {
    const roomDetails = await Room.findById(roomId);
    res.status(200).json({ status: "success", roomDetails });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@desc create a new room in the database
//@POST api/rooms/create
//private admin
export const createRoom = async (req, res) => {
  dbConnect();
  console.log(req.body);
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
