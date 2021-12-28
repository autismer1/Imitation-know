import React, { memo } from "react";

import { JTextBoardWrapper } from "./style";

import JStoryContent from "components/story-content";

export default memo(function JTextBoard(props) {
  return (
    <JTextBoardWrapper className="topstoryItem">
      <h2 className="content-item-title">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a target="_blank" href={`https://www.zhihu.com/question/${props.target.question.id}/${props.target.type}/${props.target.id}`}>
          {props.target.question.title}
        </a>
      </h2>

      <JStoryContent
        {...props.target}
        length={70}
        articleType="text"
      />
    </JTextBoardWrapper>
  );
});
