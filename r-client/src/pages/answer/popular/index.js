import React, { memo, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getAllPopularAction } from "../store/actions";

import JAnswerTemplate from '../answer-template';

export default memo(function JPopular(props) {
  const { popular } = useSelector(
    (state) => ({
      popular: state.getIn(["answer", "popular"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPopularAction());
  }, [dispatch]);

  return (
    <>
      {popular.map((item) => {
        return <JAnswerTemplate {...item} key={item.question.id} />
      })}
    </>
  )
})
