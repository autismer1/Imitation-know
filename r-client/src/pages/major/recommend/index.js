import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getAllRecommendAction } from "../store/actions";

import { JRecommendWrapper } from "./style";

import JVideoBoard from "./video-board";
import JImgBoard from "./img-board";
import JTextBoard from "./text-board";

export default memo(function JRecommend() {
  const { recommend } = useSelector(
    (state) => ({
      recommend: state.getIn(["major", "recommend"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecommendAction());
  }, [dispatch]);

  return (
    <JRecommendWrapper>
      {recommend.map((item) => {
        switch (true) {
          case !!item.target.thumbnail_extra_info:
            return <JVideoBoard {...item} key={item.id} />;
          case !!item.target.image_url:
            return <JImgBoard {...item} key={item.id} />;
          case !item.target:
            return null;
          default:
            return <JTextBoard {...item} key={item.id} />;
        }
      })}
    </JRecommendWrapper>
  );
});
