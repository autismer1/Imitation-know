import React, { memo } from "react";

import {
  JDiscoverCollectItemWrapper,
  ItemHeaderWrapper,
  ItemContentWrapper,
  ItemBottomWrapper,
  JAWrapper
} from "./style";

import JAppPopover from 'components/app-popover';

import { formatNumber } from "@/utils/format";

export default memo(function JDiscoverCollectItem(props) {

  return (
    <JDiscoverCollectItemWrapper className="wrapper container-box-shadow">
      <ItemHeaderWrapper>
        <div className="info">
          <JAWrapper className="discover-a-title text-nowrap">
            {props.title}
          </JAWrapper>
          <div className="relatedMember">
            <div className="creator">
              <JAppPopover
                placement="bottomRight"
                user_token={props.url_token}
                avatar={<img src={props.creator.avatar_url} alt="" />}
              />
              <JAWrapper className="name">
                {props.creator.name}
              </JAWrapper>
              <span className="suffix">创建</span>
            </div>
            <div className="followers">
              {formatNumber(props.follower_count)} 人关注
            </div>
          </div>
        </div>
        <div className="follow-btn">
          <div className="btn">关注收藏夹</div>
        </div>
      </ItemHeaderWrapper>
      <ItemContentWrapper>
        {props.favitems.map((item) => {
          return (
            <div className="content-item" key={item.content.id}>
              <JAWrapper
                className="content-height text-nowrap content--title"
              >
                {item.content.title ? item.content.title : item.content.question.title}
              </JAWrapper>
              <div className="content-height content-item-excerpt text-nowrap">
                {item.content.excerpt}
              </div>
              <div className="content-item-tags">
                <span className="tag-answer">回答</span>
                <span className="tag-content-count discover-count">{formatNumber(item.content.voteup_count)} 赞同</span>
                <span className="tag-content-count discover-count">{formatNumber(item.content.comment_count)} 评论</span>
              </div>
            </div>
          );
        })}
      </ItemContentWrapper>
      <ItemBottomWrapper href="#/" target="_blank">
        已收藏 {formatNumber(props.total_count)} 条内容
      </ItemBottomWrapper>
    </JDiscoverCollectItemWrapper>
  );
});
