import React, { ReactNode } from "react";

import Layout from "../components/Layout";
import Ticket from "../components/TicketUnit";

const styles = {};

type props = {
  children: ReactNode;
};

const App: React.FC<props> = () => {
  return (
    <Layout>
      hello!
      <Ticket />
    </Layout>
  );
};

export default App;
