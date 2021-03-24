import React, { useState } from "react";
import _ from "lodash";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/users";

import { Radio, Row, Col, Button, Tooltip, Spin } from "antd";
import {
  UnorderedListOutlined,
  AppstoreOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import { Filters, ContactsTable, Statistics } from "../";

import "./contacts.scss";

const Contacts = () => {
  // const dispatch = useDispatch();
  // let { users, isLoaded, isError } = useSelector(({ users }) => users);

  const [usersData, setUsersData] = React.useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  React.useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=100`)
      .then(({ data: { results } }) => {
        setLoaded(true);
        setUsersData(results);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const onClickButton = () => {
    setUsersData(_.shuffle(usersData));
  };

  return (
    <div className="contacts">
      <Row className="contacts__row">
        <Col span={12}>
          <h1 className="contacts__title">Contacts</h1>
        </Col>

        <Col className="contacts__col" span={12}>
          <Tooltip className="contacts__reload" title="update table data">
            <Button
              type="dashed"
              shape="circle"
              icon={<ReloadOutlined />}
              onClick={onClickButton}
            />
          </Tooltip>

          <Radio.Group
            className="contacts__display-type"
            /* onChange={onChange} */ defaultValue="table"
          >
            <Radio.Button value="table">
              <UnorderedListOutlined />
            </Radio.Button>

            <Radio.Button className="contacts__display-btn" value="tiles">
              <AppstoreOutlined />
            </Radio.Button>
          </Radio.Group>
        </Col>
      </Row>

      <Filters />

      {error ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Failed to load user data. <br />
          Please try to reload the page or come back later
        </div>
      ) : loaded ? (
        <ContactsTable users={usersData} />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Spin />
        </div>
      )}

      <Statistics />
    </div>
  );
};

export default Contacts;
