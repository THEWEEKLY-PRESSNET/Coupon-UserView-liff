import React, { useState, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { useLiff } from "react-liff";

import Loading from "../components/Loading";
import Coupons from "../Coupons";
import { usePreRender } from "../hooks/usePreRender";
import store from "../stores";
import type { PageProps } from "gatsby";
import { updateCouponState } from "../stores/couponState";

const PreRender: React.FC = () => <div>loading...</div>;

const After: React.FC = () => {
  const [friendship, setFriend] = useState(false);
  const { error, isLoggedIn, isReady, liff } = useLiff();
  console.log("liff id", liff);
  console.log("isLoggedIn", isLoggedIn);
  console.log("isReady", isReady);
  //   console.log("friendship", friendship);
  useEffect(() => {
    if (!isLoggedIn) return;

    (async () => {
      const friendship = await liff.getFriendship();
      console.log("friendship useEffect", friendship);
      setFriend(friendship.friendFlag);
      if (!friendship.friendFlag) {
        window.location.replace("https://lin.ee/LWvjdI0");
      }
    })();
  }, [liff, isLoggedIn]);

  const showDisplayName = () => {
    if (error) return <p>Something is wrong.</p>;
    if (!isReady) return <p>Loading...</p>;
    if (!isLoggedIn) {
      //   return (
      //     <button
      //       className="App-button"
      //       onClick={() =>
      //         liff.login({
      //           redirectUri:
      //             "https://asia-northeast2-coupon-proj.cloudfunctions.net/LineLogin/coupons",
      //         })
      //       }
      //     >
      //       Login
      //     </button>
      //   );
      return (
        <button className="App-button" onClick={liff.login}>
          Login
        </button>
      );
    }
    if (!friendship)
      return (
        <>
          <p>公式アカウントを友達追加してください</p>
          <a href="https://lin.ee/LWvjdI0">東広島デジタル公式アカウント</a>
        </>
      );
    return <Coupons />;
  };
  //   return <Coupons />;
  return <>{(!isReady && <div>loading...</div>) || showDisplayName()}</>;
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
