"use client";

import Load from "@/components/Load";
import { tokenProvider } from "@/SeverActions/stream.actions";
import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

// Default Stuff that is not needed

// const userId = "user-id";
// const token = "authentication-token";
// const user = { id: userId };

// const client = new StreamVideoClient({ apiKey, user, token });
// const call = client.call("default", "my-first-call");
// call.join({ create: true });

const StremProvider = ({ children }) => {
  const [client, setClient] = useState();
  const { user, isLoaded } = useUser();
  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!apiKey)
      throw new Error(
        "No api key for Stream Found! Make sure to check to install docs or make a new stream api key environment variable with the name 'NEXT_PUBLIC_STREAM_API_KEY'"
      );

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider: tokenProvider,
    });

    setClient(client);
  }, [isLoaded, user]);

  if (!client) return <Load />;

  return <StreamVideo client={client}>{children}</StreamVideo>;
};

export default StremProvider;
