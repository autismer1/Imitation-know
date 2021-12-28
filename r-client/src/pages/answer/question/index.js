import React, { memo, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getAllQuestionAction } from "../store/actions";

import JAnswerTemplate from '../answer-template';

export default memo(function JQuestion(props) {
  const { question } = useSelector(
    (state) => ({
      question: state.getIn(["answer", "question"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQuestionAction());
  }, [dispatch]);

  return (
    <>
      {question.map((item) => {
        return <JAnswerTemplate {...item} key={item.question.id} />
      })}
    </>
  );
});
