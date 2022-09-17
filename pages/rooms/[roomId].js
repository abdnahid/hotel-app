import React from "react";
import { toast } from "react-toastify";
import absoluteUrl from "next-absolute-url";
import axios from "axios";
import Image from "next/image";

const SingleRoom = ({ roomDetails, error }) => {
  if (error) {
    toast.error(error);
    return <div>Room Information not found</div>;
  } else {
    const {
      name,
      pricePerNight,
      numOfBeds,
      rating,
      description,
      location,
      guestCapacity,
      category,
      images,
    } = roomDetails;
    console.log(images);
    return (
      <div className="w-4/5 mx-auto flex items-center justify-center py-16">
        <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Image
            src={images[0]}
            alt="room image"
            className="h-80 w-72 object-cover rounded-t-xl"
            width={300}
            height={200}
            layout="responsive"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">
              {category}
            </span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {name}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                {pricePerNight}
              </p>
              <div className="ml-auto">
                <button className="theme-btn-sm">Pay Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleRoom;

export const getServerSideProps = async ({ req, resolvedUrl }) => {
  const { origin } = absoluteUrl(req);
  try {
    const { data } = await axios.get(`${origin}/api${resolvedUrl}`);
    return {
      props: { roomDetails: data.roomDetails, error: null },
    };
  } catch (error) {
    return {
      props: { roomDetails: null, error: error.message },
    };
  }
};
