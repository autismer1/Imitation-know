import React, { memo, useEffect, useState } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getAllHotAction } from "../store/actions";

import { JHotWrapper } from "./style";
import HotItem from "./hot-item";

import { pullRefresh, throttle } from "@/utils/util";

export default memo(function Hot() {
  
  const { hot } = useSelector(
    (state) => ({
      hot: state.getIn(["major", "hot"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHotAction());
  }, [dispatch]);

  // 下拉加载
  const [limit, setLimit] = useState(20)
  useEffect(() => {
    window.onscroll = throttle(() => {
      if (limit <= 50) {
        if (pullRefresh()) {
          setLimit(limit + 10)
          dispatch(getAllHotAction(limit))
        }
      }
    }, 1200);

    return () => {
      window.onscroll = ''
    }
  }, [dispatch, limit])

  return (
    <JHotWrapper>
      {hot.map((item, index) => (
        <HotItem key={item.id} {...item} rank={index + 1} />
      ))}
    </JHotWrapper>
  );
});
