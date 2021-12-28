import React, { memo, useCallback, useState } from "react";
import { NavLink } from 'react-router-dom';

import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import logo from "@/assets/images/logo.png";

import { JMajorHeaderWrapper, HeaderLink, HeaderSearch } from "./style";

export default memo(function JMajorHeader(props) {
  // 提问
  const [search, setSearch] = useState("");
  const onChange = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    console.log(search);
  }, [search]);

  return (
    <JMajorHeaderWrapper>
      <div className="wrap-v2">
        <HeaderLink>
          <div>
            <img className="logo" src={logo} alt="logo" />
          </div>
          <ul className="link-tabs">
            {props.navTab.map((item) => (
              <li className="tab-item" key={item.name}>
                <NavLink to={item.link}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </HeaderLink>
        <div className="divider"></div>
        <HeaderSearch>
          <div className="search">
            <Input
              placeholder="考研成功你获得了什么"
              suffix={<SearchOutlined />}
              onChange={onChange}
            />
            <Button className="btn" onClick={(e) => handleSearch()}>
              提问
            </Button>
          </div>
        </HeaderSearch>
      </div>
    </JMajorHeaderWrapper>
  );
});
