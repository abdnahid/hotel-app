import React from "react";
import { toast } from "react-toastify";
import absoluteUrl from "next-absolute-url";
import axios from "axios";

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
    } = roomDetails;
    return <div>{name}</div>;
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
