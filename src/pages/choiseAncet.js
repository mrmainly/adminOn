import React, { useContext, useEffect, useState } from "react";
import { Table, Layout } from "antd";
import axios from "axios";
import "antd/dist/antd.css";

const { Header, Content } = Layout;

const ChoiseAncet = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    try {
      axios.get("http://localhost:4200/AllANCET").then((res) => {
        setData(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  });

  const columns = [
    {
      title: "ПОЛЬЗОВАТЕЛЬ",
      dataIndex: "AncetUser",
      key: "AncetUser",
    },
    {
      title: "CALCULATE SCORE",
      dataIndex: "SCORE",
      key: "SCORE",
    },
  
  ];
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <Table columns={columns} dataSource={data} />
    </Content>
  );
};

export default ChoiseAncet;
