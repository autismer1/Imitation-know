import React, { memo } from "react";

import { JVideoBoardWapper, VideoWrapper } from "./style";

import JStoryContent from "components/story-content";

export default memo(function JVideoBoard(props) {
  return (
    <JVideoBoardWapper className="topstoryItem">
      <h2 className="content-item-title">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a
          target="_blank"
          href={`https://www.zhihu.com/${props.target.type}/${props.target.id}`}
        >
          {props.target.title}
        </a>
      </h2>

      <VideoWrapper>
        <div className="video-item">
          <video
            className="video-player"
            src={props.target.thumbnail_extra_info.playlist.hd.url}
            preload="true"
            controls
          ></video>
        </div>
      </VideoWrapper>

      <JStoryContent
        {...props.target}
        length={70}
        articleType="text"
      />
    </JVideoBoardWapper>
  );
});
