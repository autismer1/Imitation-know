import React, { memo, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { BackTop } from 'antd';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getAllDiscussAction } from "../store/actions";

import { JDiscussWrapper, JContent, JAWrapper } from "./style";

import JAppHeader from "components/app-header";
import JSeat from "components/seat-container";
import classNames from "classnames";

import { formatHeat } from '@/utils/format';
import { pullRefresh, throttle } from "@/utils/util";

export default memo(function JDiscuss(props) {
  const { discuss } = useSelector(
    (state) => ({
      discuss: state.getIn(["discover", "discuss"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDiscussAction());
    dispatch(getAllDiscussAction(20));
    dispatch(getAllDiscussAction(30));
  }, [dispatch]);

  // 下拉加载
  const [offset, setOffset] = useState(40)
  useEffect(() => {
    window.onscroll = throttle(() => {
      if (pullRefresh()) {
        setOffset(offset + 10)
        dispatch(getAllDiscussAction(offset))
      }
    }, 1500);

    return () => {
      window.onscroll = ''
    }
  }, [dispatch, offset])

  return (
    <JDiscussWrapper>
      <div className="app-header container-box-shadow">
        <JAppHeader {...props} />
      </div>
      <JSeat />

      <JContent className="wrap-v1">
        <div className="discuss-header">
          <div className="header-title">圆桌</div>
          <a className="header-action" href="#/">
            举报圆桌
          </a>
        </div>
        <div className="discuss-content">
          {
           discuss.map((item, index) => {
            return (
             <JAWrapper
              className={classNames([(index + 1)%4 === 0 && 'right'])}
              target="_blank"
              href={`https://www.zhihu.com/roundtable/${item.url_token}`}
              key={item.url_token}
             >
              <LazyLoad height={200}>
               <img src={item.banner} alt="" />
              </LazyLoad>
              <div className="mask"></div>
              <div className="title">{item.name}</div>
              <div className="count">该圆桌被浏览 {formatHeat(item.visits_count)}次</div>
             </JAWrapper>
            )
           })
          }
        </div>
      </JContent>
      <BackTop />
    </JDiscussWrapper>
  );
});
