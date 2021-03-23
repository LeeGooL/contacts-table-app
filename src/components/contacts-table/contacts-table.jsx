import React from "react";

import { useSelector } from "react-redux";

import { Table, Tag } from "antd";

import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

import { CopyToClipboardText } from "../";
import { NATIONALITIES_HUMAN_NAME } from "../../constants/nationalities";

// const transformUsers = (
// 	users,
// 	searchValueByFullName = '',
// 	sortValueByGender = '',
// 	sortValueByNationality = ''
// ) => {
// 	return users
// 		.filter((user) => {
// 			if (searchValueByFullName.length) {
// 				return (
// 					`${user.name.first} ${user.name.last}`.toLowerCase() ===
// 					searchValueByFullName.toLowerCase()
// 				);
// 			}

// 			if (sortValueByGender.length) {
// 				return user.gender === sortValueByGender;
// 			}

// 			if (sortValueByNationality.length) {
// 				return (
// 					NATIONALITIES_HUMAN_NAME[user.nat][0].toLowerCase() ===
// 					sortValueByNationality.toLowerCase()
// 				);
// 			}

// 			return user;
// 		})
// 		.map(({ picture, name, dob, email, phone, location, nat }) => {
// 			return {
// 				key: email,
// 				avatar: (
// 					<img
// 						style={{ borderRadius: '50%' }}
// 						src={picture.thumbnail}
// 						alt='avatar'
// 					/>
// 				),
// 				'full-name': `${name.title} ${name.first} ${name.last}`,
// 				birthday: dob,
// 				email,
// 				phone,
// 				location,
// 				nationality: NATIONALITIES_HUMAN_NAME[nat],
// 			};
// 		});
// };

const ContactsTable = ({ users }) => {
  const {
    searchValueByFullName,
    sortValueByGender,
    sortValueByNationality,
  } = useSelector(({ filters }) => filters);

  let sorted = users;

  // switch (searchValueByFullName, sortValueByGender, sortValueByNationality) {
  // 	case sortValueByGender.length:
  // 		sorted = users.filter((user) => user.gender === sortValueByGender);

  // 		sortValueByNationality.length
  // 			? (sorted = sorted.filter((user) =>
  // 					NATIONALITIES_HUMAN_NAME[user.nat][0]
  // 						.toLowerCase()
  // 						.includes(sortValueByNationality.toLowerCase())
  // 			  ))
  // 			: sorted;

  // 		break;

  // 	case sortValueByNationality.length:
  // 		sorted = users.filter((user) =>
  // 			NATIONALITIES_HUMAN_NAME[user.nat][0]
  // 				.toLowerCase()
  // 				.includes(sortValueByNationality.toLowerCase())
  // 		);

  // 		sortValueByGender.length
  // 			? (sorted = sorted.filter((user) => user.gender === sortValueByGender))
  // 			: sorted;

  // 		break;

  // 	case searchValueByFullName.length:
  // 		sorted = users.filter(
  // 			(user) =>
  // 				`${user.name.first} ${user.name.last}`.toLowerCase() ===
  // 				searchValueByFullName.toLowerCase()
  // 		);

  // 		break;
  // }

  if (sortValueByGender.length) {
    sorted = users.filter((user) => user.gender === sortValueByGender);

    if (sortValueByNationality.length) {
      sorted = sorted.filter((user) =>
        NATIONALITIES_HUMAN_NAME[user.nat][0]
          .toLowerCase()
          .includes(sortValueByNationality.toLowerCase())
      );
    }
  } else if (sortValueByNationality.length) {
    sorted = sorted.filter((user) =>
      NATIONALITIES_HUMAN_NAME[user.nat][0]
        .toLowerCase()
        .includes(sortValueByNationality.toLowerCase())
    );

    if (sortValueByGender.length) {
      sorted = users.filter((user) => user.gender === sortValueByGender);
    }
  } else if (searchValueByFullName.length) {
    sorted = users.filter(
      (user) =>
        `${user.name.first} ${user.name.last}`.toLowerCase() ===
        searchValueByFullName.toLowerCase()
    );
  }

  const dataSource = sorted.map(
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
