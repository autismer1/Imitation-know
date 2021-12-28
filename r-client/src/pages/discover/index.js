import React, { memo, useEffect } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { BackTop } from 'antd';

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getAllSpecialAction,
  getAllCollectAction,
  getAllColumnAction,
} from "./store/actions";

import JCommonHeader from "components/common-header";
import JDiscoverFooter from "components/discover-footer";
import JDiscoverSpecialItem from "./discover-special-item";
import JDiscoverDiscussItem from "./discover-discuss-item";
import JDiscoverCollectItem from "./discover-collect-item";
import JDiscoverColumnItem from "./discover-column-item";

import { DiscoverNavTab } from "@/common/local-data";
import {
  JDiscoverWrapper,
  JSpecial,
  JDiscuss,
  JCollect,
  JColumn
} from "./style";

export default memo(function Discover(props) {
  const { special, collect, column } = useSelector(
    (state) => ({
      special: state.getIn(["discover", "special"]),
      collect: state.getIn(["discover", "collect"]),
      column: state.getIn(["discover", "column"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSpecialAction(4, 10));
    dispatch(getAllCollectAction(4, 10));
    dispatch(getAllColumnAction(4, 10));
  }, [dispatch]);

  return (
    <JDiscoverWrapper>
      <JCommonHeader {...props} navTab={DiscoverNavTab} />

      <div className="wrap-v1 discover-container">
        <JSpecial>
          <Title title="最新专题" icon="icon" />

          <div className="wrap-content">
            <div className="content">
              {special.data && special.data.map((item) => {
                return <JDiscoverSpecialItem {...item} key={item.id} />;
              })}
            </div>
          </div>

          <Actions title="专题" link="/discover/special" />
        </JSpecial>

        <JDiscuss className="discover-item">
          <Title title="圆桌讨论" icon="qunfengpengyouquan" />

          <div className="wrap-content">
            <JDiscoverDiscussItem />
          </div>

          <Actions title="圆桌" link="/discover/discuss" />
        </JDiscuss>

        <JCollect className="discover-item">
          <Title title="热门收藏夹" icon="shoucang1" />

          <div className="wrap-content">
            <div className="content collect">
              {collect.map((item) => {
                return <JDiscoverCollectItem {...item} key={item.id} />
              })}
            </div>
          </div>

          <Actions title="收藏夹" link="/discover/collect" />
        </JCollect>

        <JColumn className="discover-item">
          <Title title="专栏" icon="qianbipencil86" />

          <div className="wrap-content">
            <div className="column">
              {column.map((item) => {
                return item ? <JDiscoverColumnItem {...item} key={item.id} /> : null
              })}
            </div>
          </div>

          <Actions title="专栏" link="/discover/column" />
        </JColumn>

        <JDiscoverFooter />
      </div>
      <BackTop />
    </JDiscoverWrapper>
  );
});

const Title = memo((props) => {
  return (
    <div className="wrap-title">
      <span
        className={classNames(["icon iconfont", `icon-${props.icon}`])}
      ></span>
      <span className="title">{props.title}</span>
    </div>
  );
});

const Actions = memo((props) => {
  return (
    <div className="wrap-action">
      <Link to={props.link}>查看更多{props.title}</Link>
    </div>
  );
});
