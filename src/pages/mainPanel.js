import { Layout, Menu } from "antd";
import React, { useState } from "react";
import LeftPanel from "../component/LeftPanel";
import Navbar from "../component/Navbar";
import ChoiseUser from "../pages/choiseUser";
import ChoiseAncet from "../pages/choiseAncet";
import { Context } from "../context";
const { Header, Content } = Layout;
const Layou = () => {
  const [showUser, setShowUser] = useState(false);
  const [showAncet, setShowAncet] = useState(false);

  const openShowUser = () => {
    setShowUser(true)
  }
  const openShowAncet = () => {
    setShowAncet(true)
  }
  return (
    <Context.Provider>
      <Layout>
        <Navbar />
        <Layout>
          <LeftPanel />
          <Layout style={{ padding: "0 24px 24px" }}>
            {showUser && <ChoiseUser />}
            {showAncet && <ChoiseAncet />}
          </Layout>
        </Layout>
      </Layout>
    </Context.Provider>
  );
};

export default Layou;
