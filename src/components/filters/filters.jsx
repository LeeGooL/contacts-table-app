import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  setSearchValueByFullName,
  setFilterValueByGender,
  setFilterValueByNationality,
  clearFiltersValue,
} from "../../redux/actions/filters";

import { Row, Input, Col, Card, Select, Button, Form } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import "./filters.scss";

const { Search } = Input;
const { Option } = Select;

function validateInputSearchByFullName(name) {
  if (
    name.split(" ")[0].toLowerCase() === "mr" ||
    name.split(" ")[0].toLowerCase() === "ms" ||
    name.split(" ")[0].toLowerCase() === "mrs" ||
    name.split(" ")[0].toLowerCase() === "miss"
  ) {
    return {
      validateStatus: "error",
      errorMsg: 'Input your full name without "mr", "ms" and others',
    };
  }

  if (
    (name.split(" ").length === 2 &&
      name.split(" ")[0].length > 0 &&
      name.split(" ")[1].length > 0) ||
    name === ""
  ) {
    return {
      validateStatus: "success",
      errorMsg: null,
    };
  } else if (name.split(" ").length >= 3) {
    return {
      validateStatus: "error",
      errorMsg: "Please input 2 words of your name",
    };
  }

  return {
    validateStatus: "error",
    errorMsg: "Please input your full name (2 words)!",
  };
}

const Filters = () => {
  const dispatch = useDispatch();
  const {
    searchValueByFullName,
    filterValueByGender,
    filterValueByNationality,
  } = useSelector((filters) => filters);

  const [fullName, setFullName] = useState({
    value: "",
  });
  const [isDispatch, setIsDispatch] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [sortByNationality, setSortByNationality] = useState("");

  useEffect(() => {
    if (fullName.value === "" && isDispatch === true) {
      dispatch(setSearchValueByFullName(fullName.value));
      setIsDispatch(false);
    }

    updateIsSearch();
  }, [fullName.value]);

  useEffect(() => {
    const timerId = setTimeout(
      () => dispatch(setFilterValueByNationality(sortByNationality)),
      0
    );

    return () => clearTimeout(timerId);
  }, [sortByNationality]);

  const updateIsSearch = React.useCallback(() => {
    if (fullName.value.length) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [fullName.value]);

  const onSearchValueByFullName = ({ target: { value } }) => {
    setFullName({ ...validateInputSearchByFullName(value), value });
  };

  const onSearchByFullName = () => {
    if (fullName.validateStatus !== "error") {
      dispatch(setSearchValueByFullName(fullName.value));
      setIsDispatch(true);
    }

    return;
  };

  const handleChangeGender = (gender) => {
    gender === undefined
      ? dispatch(setFilterValueByGender(""))
      : dispatch(setFilterValueByGender(gender));
  };

  const onSearchByNationality = ({ target: { value } }) => {
    setSortByNationality(value);
  };

  const handlerOnClickClear = () => {
    dispatch(clearFiltersValue());
    setFullName({
      value: "",
    });
  };

  return (
    <Card className="filters">
      <Row className="filters__row">
        <Col className="filters__col" span={21}>
          <Form className="filters__form">
            <Form.Item
              className="filters__form-item"
              validateStatus={fullName.validateStatus}
              help={fullName.errorMsg}
            >
              <Search
                className="filters__search-name"
                placeholder="Search by full name"
                onChange={onSearchValueByFullName}
                onSearch={onSearchByFullName}
                value={fullName.value}
                allowClear
                disabled={
                  filterValueByGender.length || filterValueByNationality.length
                }
              />
            </Form.Item>
          </Form>

          <Select
            className="filters__select-gender"
            allowClear
            value={filterValueByGender.length ? filterValueByGender : null}
            placeholder="Gender"
            onChange={handleChangeGender}
            disabled={isSearch}
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>

          <Input
            className="filters__search-nationality"
            placeholder="Nationality"
            value={filterValueByNationality}
            onChange={onSearchByNationality}
            disabled={isSearch}
          />
        </Col>

        <Col className="filters__col clear" span={3}>
          <Button icon={<CloseOutlined />} onClick={handlerOnClickClear}>
            Clear
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Filters;
