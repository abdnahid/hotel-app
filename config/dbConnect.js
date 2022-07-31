import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("database connected"));
};

export default dbConnect;
