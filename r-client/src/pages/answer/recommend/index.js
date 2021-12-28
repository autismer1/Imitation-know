import React, { memo, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getAllRecommendAction } from "../store/actions";

import JAnswerTemplate from '../answer-template';

export default memo(function JRecommend(props) {
  const { recommend } = useSelector(
    (state) => ({
      recommend: state.getIn(["answer", "recommend"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecommendAction());
  }, [dispatch]);

  return (
    <>
      {recommend.map((item) => {
        return <JAnswerTemplate {...item} key={item.question.id} />
      })}
    </>
  );
});
