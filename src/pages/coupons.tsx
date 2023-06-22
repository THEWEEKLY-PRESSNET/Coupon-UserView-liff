import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { Provider } from "react-redux";
import { LiffProvider, useLiff } from "react-liff";

import Coupons from "../Coupons";
import { usePreRender } from "../hooks/usePreRender";
import store from "../stores";
import type { PageProps } from "gatsby";

const homeUrl = "https://www.higashihiroshima-digital.com/";
const liffId = "1661486792-mWQ6Adxo";

const PreRender: React.FC = () => <div>loading...</div>;

const After: React.FC = () => {
  const [displayName, setDisplayName] = useState("");
  const [profile, setProfile] = useState({});
  const [friendship, setFriend] = useState(false);
  const { error, isLoggedIn, isReady, liff } = useLiff();
  console.log("liff id", liff);
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
      <Provider store={store}>
        <LiffProvider liffId={liffId}>
          <Coupons />
          <p>Welcome to the react-liff demo app, {displayName}!</p>
          <p>state: {liff.state}</p>
          <p>friendship: {friendship}</p>
          <p></p>
          <button className="App-button" onClick={liff.logout}>
            Logout
          </button>
        </LiffProvider>
      </Provider>
    );
  };
  return <div>Coupons!!!!{showDisplayName()}</div>;
};

const CouponsPage: React.FC<PageProps> = ({ location }) => {
  console.log("location", location);

  return usePreRender(
    PreRender,
    <Provider store={store}>
      <After />
    </Provider>
  );
};

export default CouponsPage;
