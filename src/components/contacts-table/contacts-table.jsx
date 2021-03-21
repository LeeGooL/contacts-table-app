import React from "react";

import { Table, Tag } from "antd";

import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

import { CopyToClipboardText } from "../";
import { NATIONALITIES_HUMAN_NAME } from "../../constants/nationalities";

/* 
<Tag color="magenta">magenta</Tag>
<Tag color="red">red</Tag>
<Tag color="volcano">volcano</Tag>
<Tag color="orange">orange</Tag>
<Tag color="gold">gold</Tag>
<Tag color="lime">lime</Tag>
<Tag color="green">green</Tag>
<Tag color="cyan">cyan</Tag>
<Tag color="blue">blue</Tag>
<Tag color="geekblue">geekblue</Tag>
<Tag color="purple">purple</Tag>
*/

const ContactsTable = ({ users }) => {
  const dataSource = users.map(
    ({ picture, name, dob, email, phone, location, nat }) => {
      return {
        key: email,
        avatar: (
          <img
            style={{ borderRadius: "50%" }}
            src={picture.thumbnail}
            alt="avatar"
          />
        ),
        "full-name": `${name.title} ${name.first} ${name.last}`,
        birthday: dob,
        email,
        phone,
        location,
        nationality: NATIONALITIES_HUMAN_NAME[nat],
      };
    }
  );

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
      render: ({ date, age }) => {
        return (
          <>
            {format(parseISO(date), "MM/dd/yyyy")} <br />
            {age} years
          </>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => {
        return <CopyToClipboardText text={email} />;
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (phone) => {
        return <CopyToClipboardText text={phone} />;
      },
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: ({ country, city, street: { name, number } }) => {
        const location = `${country}, ${city}, ${number} ${name}`;

        return <CopyToClipboardText text={location} />;
      },
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
      render: (arr) => {
        return <Tag color={arr[1]}>{arr[0]}</Tag>;
      },
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
