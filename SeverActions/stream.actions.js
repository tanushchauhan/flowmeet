"use server";

import { currentUser } from "@clerk/nextjs/dist/types/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecreat = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("User is not logged in!");

  if (!apiKey) throw new Error("No API Key!");
  if (!apiSecreat) throw new Error("No API Secreat!");

  const streamClient = new StreamClient(apiKey, apiSecreat);
  const expTime = Math.round(new Date().getTime() / 1000) + 60 * 60; // One hour

  const issuedTime = Math.floor(Date.now() / 1000) - 60;

  const token = streamClient.createToken(user.id, expTime, issuedTime);

  return token;
};
