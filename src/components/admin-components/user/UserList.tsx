"use client";
import { Checkbox, Radio, Table, TableColumnsType } from "antd";
import exp from "constants";
import { useState } from "react";

const UserList = () => {
  interface User {
    name: string;
    email: string;
    status: string;
  }
  const renderCorlor = (status: string) => {
    let color = "";
    if (status === "online") {
      color = "blue";
    } else {
      color = "red";
    }
    return <span style={{ color }}>{status}</span>;
  };

  const columns: TableColumnsType<User> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "status",
      dataIndex: "status",
      render: (text: string) => renderCorlor(text),
    },
  ];
  const data: User[] = [
    { name: "name1", email: "email", status: "online" },
    { name: "name1", email: "email", status: "online" },
    { name: "name1", email: "email", status: "online" },
    { name: "name1", email: "email", status: "online" },
    { name: "name1", email: "email", status: "offline" },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};
export default UserList;
