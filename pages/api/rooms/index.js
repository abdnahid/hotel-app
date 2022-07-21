import dbConnect from '../../../config/dbConnect';
import Room from '../../../models/roomModels';

dbConnect();

const handler = async (req, res) => {
  switch (req.method) {
    case 'POST':
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
    case 'GET':
      try {
        const searchOptions = JSON.parse(JSON.stringify(req.query));
        console.log(searchOptions);
        const page = Number(req.query.pageNumber) || 1;
        console.log(page)
        const pageSize = 10;
        const roomsCount = await Room.countDocuments({ ...searchOptions });
        // const testrooms = await Room.find({
        //   'features.wifi': 'true',
        //   location: 'New York',
        //   guestCapacity: '2',
        // });
        // console.log(testrooms);
        const pages = Math.ceil(roomsCount / pageSize);
        const rooms = await Room.find({ ...searchOptions })
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        res
          .status(200)
          .json({ status: 'success', rooms, pages, page, roomsCount });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    default:
      break;
  }
};

export default handler;
