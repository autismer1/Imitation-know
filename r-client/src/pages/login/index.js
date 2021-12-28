import React, { memo, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Form, Input, Button } from "antd";

import { ZhihuLinks, ZhihuRights, ZhihuReports } from "@/common/local-data";
import login_logo from "@/assets/images/login_logo.png";
import { LOGIN } from '@/services/api/login';

import { JLoginWrapper, LoginForm, LoginOptions, LoginFooter } from "./style";

export default memo(function Login(props) {
  const tabList = useMemo(() => {
    return [
      { name: "免密码登录", key: "free" },
      { name: "密码登录", key: "noFree" },
    ];
  }, []);
  const [tabSelect, setTabSelect] = useState("free");
  const handleSelect = useCallback((key) => {
    setTabSelect(key);
  }, []);

  const onFinish = useCallback(async (values) => {
    const data = await LOGIN('POST', '/login', values)
    if (Object.keys(data).length > 0) {
      localStorage.setItem("userInfo", data.data);
      props.history.push('/major')
    }
  }, [props])

  return (
    <JLoginWrapper>
      <div className="signFlowHomePage">
        <img className="logo" src={login_logo} alt="知乎 LOGO" />
        <LoginForm>
          <div className="signFlow">
            <div className="signFlow-tabs">
              {tabList.map((item) => (
                <div
                  className={classNames(["tab-item", item.key === tabSelect ? "tab-active" : ""])}
                  onClick={(e) => handleSelect(item.key)}
                  key={item.key}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "请输入手机号或邮箱" }]}
              >
                <Input className="input" placeholder="手机号或邮箱" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
              >
                <Input.Password className="input" placeholder="密码" />
              </Form.Item>
              
              <LoginOptions>
                <div>注册账号</div>
                <div>忘记密码?</div>
              </LoginOptions>

              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form>
            <div className="sign-tips">
              手机验证后自动登录，登录即代表同意
              <a href="https://www.zhihu.com/term/zhihu-terms">《知乎协议》</a>
              <a href="https://www.zhihu.com/term/privacy">《隐私保护指引》</a>
            </div>
          </div>
        </LoginForm>
      </div>

      {/* footer */}
      <LoginFooter>
        <div className="ZhihuLinks">
          {ZhihuLinks.map((item) => (
            <Link target="_blank" to={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="ZhihuRights">
          <span>© 2021 知乎</span>
          {ZhihuRights.map((item) => (
            <Link target="_blank" to={item.href} key={item.name}>
              {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}
              {item.name}
            </Link>
          ))}
          <span>互联网药品信息服务资格证书（京）- 非经营性 - 2017 - 0067</span>
        </div>
        <div className="ZhihuReports">
          {ZhihuReports.map((item) => (
            <Link target="_blank" to={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
          <span>违法和不良信息举报：010-82716601</span>
        </div>
      </LoginFooter>
    </JLoginWrapper>
  );
});
