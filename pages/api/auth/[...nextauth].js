import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";

const options = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENTID,
      clientSecret: process.env.GITHUB_CLIENTSECRET,
    }),
  ],
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     const userInfo = await User.findOne({ email: profile.email });
  //     const username = profile.email.split("@")[0];
  //     userInfo.username = username;
  //     await userInfo.save();
  //     return true;
  //   },
  // },
};

export default NextAuth(options);
