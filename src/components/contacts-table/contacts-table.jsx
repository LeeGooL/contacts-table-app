import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setSortValueByFullName } from "../../redux/actions/filters";

import { Table, Tag } from "antd";

import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

import { CopyToClipboardText } from "../";
import { NATIONALITIES_HUMAN_NAME } from "../../constants/nationalities";

const ContactsTable = ({ users }) => {
  const dispatch = useDispatch();

  const {
    searchValueByFullName,
    filterValueByGender,
    filterValueByNationality,
    sortValueByFullName,
  } = useSelector((filters) => filters);

  const onChange = (pagination, filters, { order }, extra) => {
    order = order === undefined ? "" : order;

    dispatch(setSortValueByFullName(order));
  };

  let filtered = JSON.parse(JSON.stringify(users));

  if (sortValueByFullName.length) {
    if (sortValueByFullName === "ascend") {
      filtered = filtered.sort((currentUser, nextUser) =>
        `${currentUser.name.first} ${currentUser.name.last}`
          .toLowerCase()
          .localeCompare(
            `${nextUser.name.first} ${nextUser.name.last}`.toLowerCase()
          )
      );
    } else if (sortValueByFullName === "descend") {
      filtered = filtered.sort((currentUser, nextUser) =>
        `${nextUser.name.first} ${nextUser.name.last}`
          .toLowerCase()
          .localeCompare(
            `${currentUser.name.first} ${currentUser.name.last}`.toLowerCase()
          )
      );
    }
  } else if (!sortValueByFullName.length) {
    filtered = users;
  }

  if (filterValueByGender.length) {
    filtered = filtered.filter((user) => user.gender === filterValueByGender);

    if (filterValueByNationality.length) {
      filtered = filtered.filter((user) =>
        NATIONALITIES_HUMAN_NAME[user.nat][0]
          .toLowerCase()
          .includes(filterValueByNationality.toLowerCase())
      );
    }
  } else if (filterValueByNationality.length) {
    filtered = filtered.filter((user) =>
      NATIONALITIES_HUMAN_NAME[user.nat][0]
        .toLowerCase()
        .includes(filterValueByNationality.toLowerCase())
    );

    if (filterValueByGender.length) {
      filtered = filtered.filter((user) => user.gender === filterValueByGender);
    }
  } else if (searchValueByFullName.length) {
    filtered = filtered.filter(
      (user) =>
        `${user.name.first} ${user.name.last}`.toLowerCase() ===
        searchValueByFullName.toLowerCase()
    );
  }

  const dataSource = filtered.map(
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
      sorter: true,
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
      onChange={onChange}
      scroll={{ x: 1000 }}
    />
  );
};

export default ContactsTable;
