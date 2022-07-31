import React, { useState, useEffect } from "react";
import { filterRooms } from "../../redux/actions/roomActions";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Filter = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const urlPath = router.asPath;
  const [filter, setFilter] = useState({
    wifi: false,
    breakfast: false,
    airConditioned: false,
    roomsCleaning: false,
    petsAllowed: false,
  });

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: !filter[e.target.name] });
  };
  useEffect(() => {
    console.log("hello");
    dispatch(filterRooms(location.host, urlPath, filter));
  }, [filter]);

  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="wifi"
          id="wifi"
          checked={filter.wifi}
          onChange={handleChange}
        />
        <label htmlFor="wifi">Wifi</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="breakfast"
          id="breakfast"
          checked={filter.breakfast}
          onChange={handleChange}
        />
        <label htmlFor="breakfast">breakfast</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="airConditioned"
          id="airConditioned"
          checked={filter.airConditioned}
          onChange={handleChange}
        />
        <label htmlFor="airConditioned">Air Conditioned</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="roomsCleaning"
          id="roomsCleaning"
          checked={filter.roomsCleaning}
          onChange={handleChange}
        />
        <label htmlFor="roomsCleaning">Room Cleaning</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="petsAllowed"
          id="petsAllowed"
          checked={filter.petsAllowed}
          onChange={handleChange}
        />
        <label htmlFor="petsAllowed">Pets Allowed</label>
      </div>
    </div>
  );
};

export default Filter;
