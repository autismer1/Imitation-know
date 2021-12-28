import React, { memo } from 'react';

import { JDiscoverColumnItemWrapper, JAWrapper } from './style';

import { formatNumber } from "@/utils/format";

export default memo(function JDiscoverColumnItem(props) {
  return (
    <JDiscoverColumnItemWrapper className="wrapper container-box-shadow">
      <JAWrapper className="avatar">
        <img src={props.image_url} alt="" />
      </JAWrapper>
      <JAWrapper className="title text-nowrap">{props.title}</JAWrapper>
      <div className="count discover-count">
        <span>{formatNumber(props.followers)} 关注</span>
        <span>{formatNumber(props.articles_count)} 文章</span>
      </div>
      <div className="intro text-two-nowrap">{props.intro}</div>
      <div className="follow-btn">
        <div className="btn">进入专栏</div>
      </div>
    </JDiscoverColumnItemWrapper>
  )
})
