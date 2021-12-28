import React, { memo, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getAllInviteAction } from "../store/actions";

import JAnswerTemplate from '../answer-template';

export default memo(function JInvite(props) {
  const { invite } = useSelector(
    (state) => ({
      invite: state.getIn(["answer", "invite"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInviteAction());
  }, [dispatch]);

  return (
    <>
      {invite.map((item) => {
        return <JAnswerTemplate {...item} key={item.id} />
      })}
    </>
  );
});
