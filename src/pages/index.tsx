import React from "react";
import { Box } from "@mui/material";

import Seo from "../components/seo";
import App from "../App";
import { usePreRender } from "../hooks/usePreRender";

const PreRender: React.FC = () => <div>loading...</div>;

const IndexPage: React.FC = () => {
  return <App />;
};

export const Head = () => (
  <Seo title="Home" description="" children={undefined} />
);

export default IndexPage;
