import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getAllFollowAction } from "../store/actions";

// import useScrollTop from "@/hooks/scroll-top";

import { JFollowWrapper } from "./style";

import ContentItem from "./content-item";

export default memo(function Follow() {
  const { follow } = useSelector(
    (state) => ({
      follow: state.getIn(["major", "follow"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFollowAction());
  }, [dispatch]);

  return (
    <JFollowWrapper>
      {follow.map((item) => (
        <ContentItem key={item.id} {...item} />
      ))}
    </JFollowWrapper>
  );
});
