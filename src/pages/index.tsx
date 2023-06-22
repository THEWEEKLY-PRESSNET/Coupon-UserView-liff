import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
// import { liff } from "@line/liff";
import { useLiff } from "react-liff";

import { usePreRender } from "../hooks/usePreRender";
import store from "../stores";
import type { PageProps } from "gatsby";

const homeUrl = "https://www.higashihiroshima-digital.com/";

const PreRender: React.FC = () => <div>loading...</div>;

const After: React.FC = () => {
  const [displayName, setDisplayName] = useState("");
  const [profile, setProfile] = useState({});
  const [friendship, setFriend] = useState(false);
  const { error, isLoggedIn, isReady, liff } = useLiff();
  console.log("liff", liff);
  console.log("isLoggedIn", isLoggedIn);
  console.log("isReady", isReady);

  useEffect(() => {
    if (!isLoggedIn) return;

    (async () => {
      const profile = await liff.getProfile();
      setDisplayName(profile.displayName);
      console.log("profile", profile);
    })();
    (async () => {
      const friendship = await liff.getFriendship();
      setFriend(friendship.frienFlag);
    })();
  }, [liff, isLoggedIn]);

  const showDisplayName = () => {
    if (error) return <p>Something is wrong.</p>;
    if (!isReady) return <p>Loading...</p>;

    if (!isLoggedIn) {
      return (
        <button className="App-button" onClick={liff.login}>
          Login
        </button>
      );
    }
    return (
      <>
        <p>Welcome to the coupon app, {displayName}!</p>
        <p>state: {liff.state}</p>
        <p>friendship: {friendship}</p>
        <p></p>
        <button className="App-button" onClick={liff.logout}>
          Logout
        </button>
      </>
    );
  };
  return <div>App Top{showDisplayName()}</div>;
};

const IndexPage: React.FC<PageProps> = ({ location }) => {
  console.log("location", location);

  return usePreRender(
    PreRender,
    <Provider store={store}>
      <After />
    </Provider>
  );
};

export default IndexPage;
