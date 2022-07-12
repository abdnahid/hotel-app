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
    default:
      try {
        const newQuery = JSON.parse(JSON.stringify(req.query));
        Object.keys(newQuery).forEach((key) => {
          key === 'location' || key === 'pageNumber'
            ? delete newQuery[key]
            : key;
        });
        const searchOptions = {
          address: {
            $regex: req.query.location ? req.query.location : '',
            $options: 'i',
          },
          ...newQuery,
        };
        const page = Number(req.query.pageNumber) || 1;
        const pageSize = 2;
        const count = await Room.countDocuments({ ...searchOptions });
        const pages = Math.ceil(count / pageSize);
        const rooms = await Room.find({ ...searchOptions })
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        res.status(200).json({ status: 'success', rooms, pages, page });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
  }
};

export default handler;
