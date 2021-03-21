import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/users";

import { Radio, Row, Col, Button, Tooltip } from "antd";
import {
  UnorderedListOutlined,
  AppstoreOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import { Filters, ContactsTable, Statistics } from "../";

import "./contacts.scss";

const Contacts = () => {
  const dispatch = useDispatch();
  const { users, isLoaded, isError } = useSelector(({ users }) => users);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="contacts">
      <Row className="contacts__row">
        <Col span={12}>
          <h1 className="contacts__title">Contacts</h1>
        </Col>

        <Col className="contacts__col" span={12}>
          <Tooltip className="contacts__reload" title="update table data">
            <Button type="dashed" shape="circle" icon={<ReloadOutlined />} />
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

      <ContactsTable users={users} />

      <Statistics />
    </div>
  );
};

export default Contacts;
