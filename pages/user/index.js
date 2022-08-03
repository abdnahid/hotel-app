import React, { useState } from "react";
import User from "../../models/userModels";
import { getSession } from "next-auth/react";
import Image from "next/image";
import axios from "axios";

const UserProfile = ({ _id, name, email, image }) => {
  console.log(_id);
  const [username, setUsername] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/user/${_id}`, { username });
  };
  return (
    <section className="py-16">
      <div className="mx-auto w-4/5">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <Image width={300} height={300} alt="profile-picture" src={image} />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <span>Username: </span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default UserProfile;

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else {
    const userDetails = await User.findOne({ email: session.user.email });
    return {
      props: JSON.parse(JSON.stringify(userDetails)),
    };
  }
};
