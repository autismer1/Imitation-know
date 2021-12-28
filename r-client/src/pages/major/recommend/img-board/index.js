import React, { memo } from "react";

import { JImgBoardWrapper } from "./style";

export default memo(function JImgBoard(props) {
  return (
    <JImgBoardWrapper className="topstoryItem">
      <h2 className="content-item-title">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a target="_blank" href={props.target.question.url}>
          {props.target.question.title}
        </a>
      </h2>
    </JImgBoardWrapper>
  );
});
