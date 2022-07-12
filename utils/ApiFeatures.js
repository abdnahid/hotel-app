class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const location = req.query.location
      ? {
          address: {
            $regex: req.query.location,
            $options: 'i',
          },
        }
      : {};
    this.query = this.query.find({ ...location });
  }
}
