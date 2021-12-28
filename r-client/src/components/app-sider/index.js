import React, { memo, useCallback } from "react";
import classNames from "classnames";
import sideBar_banner from "@/assets/images/sidebar-banner.jpg";

import {
  SideNavList,
  SideCategoryList,
  SideOptionList,
} from "@/common/local-data";

import {
  JAppSider,
  SiderTop,
  SiderCenter,
  SiderBottom,
  SiderNavWrapper,
  SiderCarousel,
} from "./style";

export default memo(function AppSider(props) {
  const handleJump = useCallback((item) => {
    props.history.push(item.link)
  }, [props])

  return (
    <JAppSider>
      <SiderTop className="card">
        <div className="creator">
          <span className="icon iconfont icon-user-edit"></span>
          <div className="text">
            <div>
              创作中心
              <span className="level">Lv3</span>
            </div>
          </div>
          <div className="draft">
            草稿箱
            <span>（0）</span>
          </div>
        </div>
        <div>
          <SiderNavWrapper>
            {SideNavList.map((item) => {
              return (
                <div className="nav-item" key={item.name}>
                  <div className={classNames(["iconBg", item.icon])}>
                    <span
                      className={classNames([
                        "icon iconfont",
                        `icon-${item.icon}`,
                      ])}
                    ></span>
                  </div>
                  <div className="item-title">{item.name}</div>
                </div>
              );
            })}
          </SiderNavWrapper>
          <SiderCarousel>
            <div className="carousel-item">
              <div className="item-child">
                <div className="child-title">今日阅读 (播放) 数</div>
                <div className="child-count">5</div>
                <div className="child-data">
                  <div className="data-title">昨日数据</div>
                  <div className="data-count">7</div>
                </div>
              </div>
              <div className="item-child">
                <div className="child-title">今日赞同数</div>
                <div className="child-count">1</div>
                <div className="child-data">
                  <div className="data-title">昨日数据</div>
                  <div className="data-count">0</div>
                </div>
              </div>
            </div>
          </SiderCarousel>
          <div className="creator-center">
            <span>进入创作中心</span>
          </div>
        </div>
      </SiderTop>
      {
        props.hide && <SiderCenter className="card">
          <div className="top-banner">
            <img
              className="sider-banner"
              src={sideBar_banner}
              alt="siderBanner"
            />
          </div>
          <div className="categoryList">
            {SideCategoryList.map((item) => {
              return (
                <div className="category-item" key={item.icon} onClick={e => handleJump(item)}>
                  <div className={classNames([item.icon, "itemBtn"])}>
                    <span
                      className={classNames([
                        "icon",
                        "iconfont",
                        `icon-${item.icon}`,
                      ])}
                    ></span>
                  </div>
                  <div className={classNames(['category-label', item.icon])}>{item.name}</div>
                </div>
              );
            })}
          </div>
        </SiderCenter>
      }
      <SiderBottom className="card">
        <div className="optionList">
          {SideOptionList.map((item) => {
            return (
              <div className="option-item" key={item.name}>
                <span
                  className={classNames(["icon iconfont", `icon-${item.icon}`])}
                ></span>
                <span className="item-text">{item.name}</span>
              </div>
            )
          })}
        </div>
      </SiderBottom>
    </JAppSider>
  );
});
