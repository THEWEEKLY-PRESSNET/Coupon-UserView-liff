import React, { ReactNode } from "react";

import Layout from "../components/Layout";

const styles = {};

type props = {
  children: ReactNode;
};

const App: React.FC<props> = () => {
  return <Layout>hello!</Layout>;
};

export default App;
