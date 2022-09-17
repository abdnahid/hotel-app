import axios from "axios";
import React, { useState } from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const NewRoom = () => {
  const [roomDetails, setRoomDetails] = useState({});
  const [images, setImages] = useState([]);
  const handleChange = (e) => {
    setRoomDetails({ ...roomDetails, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    const filesList = e.target.files;
    const filesArray = Object.keys(filesList).map((key) => filesList[key]);
    const urlArray = filesArray.map((file) => URL.createObjectURL(file));
    setImages(urlArray);
    filesArray.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "abdhotelpreset");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/abdnahid/upload",
        formData
      );
      console.log(response);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      "Content-Type": "application/json",
    };
    const response = await axios.post("/api/rooms/create", roomDetails, config);
    console.log(response);
  };
  return (
    <div className="w-4/5 mx-auto">
      <form className="py-16 grid grid-cols-2 gap-3" onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="room-input-fields"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="pricePerNight">price Per Night</label>
            <input
              type="number"
              name="pricePerNight"
              id="pricePerNight"
              className="room-input-fields"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="category">category</label>
            <input
              type="text"
              name="category"
              id="category"
              className="room-input-fields"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">description</label>
            <input
              type="text"
              name="description"
              id="description"
              className="room-input-fields"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="location">location</label>
            <input
              type="text"
              name="location"
              id="location"
              className="room-input-fields"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="address">address</label>
            <input
              type="text"
              name="address"
              id="address"
              className="room-input-fields"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="guestCapacity">guest Capacity</label>
            <input
              type="number"
              name="guestCapacity"
              id="guestCapacity"
              className="room-input-fields"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="numOfBeds">num Of Beds</label>
            <input
              type="number"
              name="numOfBeds"
              id="numOfBeds"
              className="room-input-fields"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="dropzone-card">
          <h2 className="text-xl font-semibold">Upload Room thumbnails</h2>
          <div className="dropzone">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="">
                Drag and drop or{" "}
                <span className="text-theme">choose images</span>
              </div>
              <input
                type="file"
                multiple
                accept="image/png, image/jpeg, image/webp"
                name="images"
                id="images"
                className="absolute z-20 top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {images.map((image, index) => (
              <div className="shadow-sm p-2 relative" key={index}>
                <Image
                  src={image}
                  alt="Picture of the author"
                  width={300}
                  height={200}
                  layout="responsive"
                />
                <MdDelete className="absolute right-0 cursor-pointer top-0 w-6 h-6 p-1 bg-theme text-white rounded-full" />
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="theme-btn-sm">
          Create Room
        </button>
      </form>
    </div>
  );
};

export default NewRoom;
