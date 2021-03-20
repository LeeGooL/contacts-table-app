import React from "react";

import { Row, Input, Col, Card, Select, Button } from "antd";

import { CloseOutlined } from "@ant-design/icons";
import "./filters.scss";

const { Search } = Input;
const { Option } = Select;

const Filters = () => {
  return (
    <div>
      <Card className="filters">
        <Row className="filters__row">
          <Col className="filters__col" span={21}>
            <Search
              className="filters__search-name"
              placeholder="Search by full name"
              // onSearch={onSearch}
            />
            <Select
              className="filters__select-gender"
              placeholder="Gender"
              // onChange={handleChange}
            >
              <Option value="none"></Option>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
            <Input
              className="filters__search-nationality"
              placeholder="Nationality"
              // onSearch={onSearch}
            />
          </Col>

          <Col className="filters__col clear" span={3}>
            <Button icon={<CloseOutlined />}>Clear</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Filters;
