import React from "react";

import { Table } from "antd";

const ContactsTable = () => {
  const dataSource = [
    {
      avatar: "1",
      "full-name": "Mike eianti",
      birthday: "31.07.1998",
      email: "niantren",
      phone: "8 (985) 052-38-95",
      location: "10 Downing Street",
      nationality: "russian",
    },
    {
      avatar: "2",
      "full-name": "John eiantie",
      birthday: "20.01.2000",
      email: "niantren",
      phone: "8 (985) 052-38-95",
      location: "10 Downing Street",
      nationality: "russian",
    },
  ];

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
    },
    {
      title: "Full name",
      dataIndex: "full-name",
      key: "full-name",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
    },
  ];

  return (
    <Table
      style={{
        boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
        padding: 10,
        marginBottom: 30,
      }}
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default ContactsTable;
