import React, { memo, useCallback, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";

import { Button, Input, Space, Dropdown, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import logo from "@/assets/images/logo.png";
import { HeaderTabs, HeaderMenu } from "@/common/local-data";

import {
  JHeaderWrapper,
  HeaderLink,
  HeaderSearch,
  HeaderUserInfo,
} from "./style";

export default memo(function JAppHeader(props) {
  // 提问
  const [search, setSearch] = useState("");
  const onChange = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    console.log(search);
  }, [search]);

  // 点击用户头像做相关跳转
  const handleMenuClick = useCallback(
    (value) => {
      const item = HeaderMenu[`${Number(value.key)}`];
      props.history.push(item.link);
    },
    [props]
  );

  const style = useMemo(() => {
    return {
      color: "#8590A6",
      fontSize: "14px",
    };
  }, []);

  const menu = (
    <Menu onClick={handleMenuClick}>
      {HeaderMenu.map((item, index) => {
        return (
          <Menu.Item key={index} style={style}>
            <span
              className={`icon iconfont icon-${item.icon}`}
              style={{
                fontSize: index === 1 ? "13px" : "16px",
                marginRight: "6px",
              }}
            ></span>
            {item.key}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <JHeaderWrapper>
      <div className="wrap-v2">
        <HeaderLink>
          <NavLink to="/major">
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
          <ul className="link-tabs">
            {HeaderTabs.map((item, index) => (
              <li className="tab-item" key={item.key}>
                <NavLink
                  to={item.link}
                >
                  {item.key}
                </NavLink>
              </li>
            ))}
          </ul>
        </HeaderLink>

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

        <HeaderUserInfo>
          <Space size={40}>
            <span className="icon iconfont icon-xiaoxitongzhi"></span>
            <span className="icon iconfont icon-24gf-bubbles4"></span>
            <Dropdown
              placement="bottomCenter"
              overlay={menu}
              trigger={["click"]}
              arrow
            >
              <img
                src="https://pic4.zhimg.com/v2-9ad9b9b50dda41c5d2a5e94d3f2ec3e9_is.jpg"
                alt="点击打开超人不会飞的主页"
              />
            </Dropdown>
          </Space>
        </HeaderUserInfo>
      </div>
    </JHeaderWrapper>
  );
});
