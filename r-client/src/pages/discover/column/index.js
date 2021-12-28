import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";

import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getAllColumnAction } from "../store/actions";

import { RedoOutlined } from "@ant-design/icons";

import {
  JColumnlWrapper,
  JColumnHeader,
  JColumnTopContent,
  JColumnCenterContent,
  JColumnBottomContent,
} from "./style";

import JSeat from "components/seat-container";

import { formatNumber } from "@/utils/format";
import logo from "@/assets/images/logo.png";
import { useCallback } from "react";
import { useState } from "react";

export default memo(function JColumn(props) {
  const { column } = useSelector(
    (state) => ({
      column: state.getIn(["discover", "column"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllColumnAction(8, 8));
  }, [dispatch]);

  const [offset, setOffset] = useState(16);
  const handleChange = useCallback(() => {
    setOffset(offset + 8);
    dispatch(getAllColumnAction(8, offset));
  }, [dispatch, offset]);

  return (
    <JColumnlWrapper>
      <JColumnHeader className="app-header container-box-shadow">
        <div className="header-content">
          <Link to="/major">
            <img src={logo} alt="" />
          </Link>
          <div className="content-btn">
            <div className="btn-more">
              <span className="icon iconfont icon-shenglvehao"></span>
            </div>
            <div className="btn-write column-btn">
              <span className="icon iconfont icon-bianji2"></span>
              写文章
            </div>
          </div>
        </div>
        <div className="header-profile">
          <img
            src="https://pic4.zhimg.com/v2-9ad9b9b50dda41c5d2a5e94d3f2ec3e9_is.jpg"
            alt="点击打开超人不会飞的主页"
          />
        </div>
      </JColumnHeader>
      <JSeat />

      <JColumnTopContent>
        <h1 className="column-top-title">知乎专栏</h1>
        <h2 className="column-top-subTitle">随心写作，自由表达</h2>
        <a
          className="column-top-write-btn column-btn"
          href="#/"
          target="_blank"
        >
          开始写文章
        </a>
        <a className="column-top-request-btn" href="#/" target="_blank">
          申请开通专栏
        </a>
      </JColumnTopContent>

      <JColumnCenterContent>
        <h3 className="column-center-title">
          <div className="title-text">专栏 · 发现</div>
          <div className="title-line"></div>
        </h3>
        <div className="column-center-container">
          {column.map((item) => {
            return (
              item && (
                // eslint-disable-next-line react/jsx-no-target-blank
                <a
                  className="card"
                  href={item.url}
                  target="_blank"
                  key={item.id}
                >
                  <img src={item.image_url} alt="" />
                  <div className="info">
                    <div className="info-title text-nowrap">{item.title}</div>
                    <div className="info-description text-two-nowrap">
                      {item.intro}
                    </div>
                  </div>
                  <div className="meta">
                    {formatNumber(item.followers)} 人关注 |{" "}
                    {formatNumber(item.articles_count)} 篇文章
                  </div>
                  <div className="entry-btn column-btn">进入专栏</div>
                </a>
              )
            );
          })}
        </div>
        <div className="refresh-btn column-btn" onClick={handleChange}>
          <RedoOutlined />
          换一换
        </div>
      </JColumnCenterContent>

      <JColumnBottomContent>
        <h3 className="column-bottom-title">在知乎创作</h3>
        <div className="column-bottom-btn column-btn">申请专栏</div>
        <footer className="column-bottom-footer">
          <span>© 2021 知乎</span>
          <span> · </span>
          <a href="#/" target="_blank">知乎专栏</a>
          <span> · </span>
          <a href="#/" target="_blank">圆桌</a>
          <span> · </span>
          <a href="#/" target="_blank">发现</a>
          <span> · </span>
          <a href="#/" target="_blank">移动应用</a>
          <span> · </span>
          <a href="#/" target="_blank">使用机构账号登录</a>
          <span> · </span>
          <a href="#/" target="_blank">联系我们</a>
          <span> · </span>
          <a href="#/" target="_blank">来知乎工作</a>
          <br />
          <a href="#/" target="_blank">京 ICP 证 110745 号</a>
          <span> · </span>
          <a href="#/" target="_blank">京 ICP 备 13052560 号 - 1</a>
          <span> · </span>
          <a href="#/" target="_blank">
            <img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png" alt="" />
            京公网安备 11010802020088 号
          </a>
          <span> · </span>
          <a href="#/" target="_blank">出版物经营许可证</a>
        </footer>
      </JColumnBottomContent>
    </JColumnlWrapper>
  );
});
