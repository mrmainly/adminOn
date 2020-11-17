import React, { useContext, useEffect, useState } from "react";
import { Table, Layout } from "antd";
import axios from "axios";
import "antd/dist/antd.css";

const { Header, Content } = Layout;

const ChoiseUser = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    try {
      axios.get("http://localhost:4200/AllData").then((res) => {
        setData(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  });

  const columns = [
    {
      title: "НОМЕР ТЕЛЕФОНА",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "ФАМИЛИЯ ИМЯ ОТЧЕСТВО",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "IS ACTIVE",
      dataIndex: "active",
      key: "active",
    },
    {
      title: "НОМЕР СНИЛС",
      dataIndex: "snils",
      key: "snils",
    },
    {
      title: "НОМЕР ОМС",
      dataIndex: "oms",
      key: "oms",
    },
    {
      title: "НАЦИОНАЛЬНОСТЬ",
      dataIndex: "national",
      key: "national",
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

export default ChoiseUser;
