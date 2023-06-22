import React, { useState, useEffect } from "react";
// import { navigate } from "gatsby";
import { Provider, useDispatch } from "react-redux";
import { LiffProvider, useLiff } from "react-liff";
import { ThemeProvider } from "@mui/material/styles";

import Coupons from "../Coupons";
import { usePreRender } from "../hooks/usePreRender";
import store from "../stores";
import theme from "../styles/theme";
import type { PageProps } from "gatsby";
import { updateCouponState } from "../stores/couponState";

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
  console.log("friendship", friendship);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoggedIn) return;
    (async () => {
      const profile = await liff.getProfile();
      setDisplayName(profile.displayName);
      console.log("profile", profile);
    })();
    (async () => {
      const friendship = await liff.getFriendship();
      console.log("friendship", friendship);
      if (!friendship) {
        window.location.replace("https://lin.ee/LWvjdI0");
      }
      setFriend(friendship.frienFlag);
    })();
    (async () => {
      const idToken = liff.getIDToken();
      // setFriend(friendship.frienFlag);
      console.log("idToken", idToken);
      dispatch(updateCouponState({ idToken }));
    })();
  }, [liff, isLoggedIn, dispatch]);

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
      //   <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Coupons />
        <p>Welcome to the react-liff demo app, {displayName}!</p>
        <p>state: {liff.state}</p>
        <p>friendship: {friendship}</p>
        <p></p>
        <button className="App-button" onClick={liff.logout}>
          Logout
        </button>
      </ThemeProvider>
      //   {/* </Provider> */}
    );
  };
  //   return <>{showDisplayName()}</>;
  return <Coupons />;
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
