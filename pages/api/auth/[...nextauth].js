import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import dbConnect from "../../../config/dbConnect";
import User from "../../../models/userModels";

dbConnect();

const options = {
  session: {
    jwt: true,
  },
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
  //   jwt:async(token, user)=> {
  //     user && (token.user=user)
  //     return Promise.resolve(token)
  //   },
  //   session:async(session,token)=>{

  //   }
  // },
};

export default NextAuth(options);
