import React, { memo } from "react";
import LazyLoad from 'react-lazyload';

import { formatTime, formatHeat, formatImage } from "@/utils/format";

import {
  JVideoItemWrapper,
  ImgWrapper,
  TitleWrapper,
  AuthorWrapper,
} from "./style";

export default memo(function JVideoItem(props) {
  let videoInfo = props.video || props.attachment.video.video_info
  const duration = formatTime(videoInfo.duration);
  const playCount = formatHeat(videoInfo.play_count);

  const type = props.type
  const url = type === 'answer' ? `/question/${props.question.id}/answer/${props.id}` : `/zvideo/${props.id}`
  return (
    <JVideoItemWrapper>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href={`https://www.zhihu.com${url}?utm_source=pc_tab`} target="_blank">
        <ImgWrapper>
          <LazyLoad height={128}>
            <img src={formatImage(videoInfo.thumbnail)} alt="" />
          </LazyLoad>
          <div className="desc">
            <div className="desc-left">
              <span className="icon iconfont icon-24gl-play"></span>
              {playCount}播放
            </div>
            <div className="desc-right">{duration}</div>
          </div>
        </ImgWrapper>
      </a>
      <TitleWrapper className="text-two-nowrap">
        <a href={props.url} title={props.title || props.excerpt}>
          {props.title || props.excerpt}
        </a>
      </TitleWrapper>

      <AuthorWrapper>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a
          target="_blank"
          className="user-box"
          href={`https://www.zhihu.com/${props.author.user_type}/${props.author.url_token}`}
        >
          <div className="user-avatar">
            <LazyLoad height={15}>
              <img src={props.author.avatar_url} alt="" />
            </LazyLoad>
          </div>
          <div className="user-name text-nowrap">{props.author.name}</div>
        </a>
        {props.interactive_tags &&
          props.interactive_tags.map((item, index) => (
            <div className="hot-comment" key={index}>
              {item.text}
            </div>
          ))}
        <div className="operation">
          <span className="icon iconfont icon-shenglvehao"></span>
        </div>
      </AuthorWrapper>
    </JVideoItemWrapper>
  );
})
