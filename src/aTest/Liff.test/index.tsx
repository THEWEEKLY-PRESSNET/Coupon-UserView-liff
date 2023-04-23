import React, { useEffect, useState } from "react";
import { useLiff } from "react-liff";
import { Box } from "@mui/material";
import Test from "..";

const TestApp: React.FC = () => {
  const [displayName, setDisplayName] = useState("");
  const { error, isLoggedIn, isReady, liff } = useLiff();

  useEffect(() => {
    if (!isLoggedIn) return;

    (async () => {
      const profile = await liff.getProfile();
      setDisplayName(profile.displayName);
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
        <p>Welcome to the react-liff demo app, {displayName}!</p>
        <button className="App-button" onClick={liff.logout}>
          Logout
        </button>
      </>
    );
  };
  return <Box>{showDisplayName()}</Box>;
};

export default TestApp;
