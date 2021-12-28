import React, { memo } from "react";

import { Skeleton, Tooltip } from "antd";

import { JPopoverWrapper, HoverCardTitle, HoverCardItem } from "./style";
import text from "@/assets/images/text.png";

import { formatNumber } from "@/utils/format";

export default memo(function JPopover(props) {
  return (
    <Skeleton active loading={props ? false : true}>
      <JPopoverWrapper>
        <div style={{ marginTop: "-30px" }}>
          <HoverCardTitle>
            <img className="avatar" src={props.avatar_url} alt="" />
            <div className="titleText">
              <div className="title">
                <a href="#/">{props.name}</a>
                {props.is_org && <Tooltip title={props.user_type === 'people' ? '已认证个人' : '已认证账号'}><img src={text} alt="" /></Tooltip>}
              </div>
              <div className="subTitle text-nowrap">{props.headline}</div>
            </div>
          </HoverCardTitle>
        </div>
        {props.is_org && (
          <HoverCardItem>
            <div className="author-ident">
              <img src={text} alt="" />
              <span>已认证账号</span>
            </div>
          </HoverCardItem>
        )}
        <HoverCardItem>
          <div className="number-board">
            <a
              className="board-item"
              href={`https://www.zhihu.com/org/${props.url_token}/answers`}
            >
              <div>回答</div>
              <strong>{formatNumber(props.answer_count)}</strong>
            </a>
            <a
              className="board-item"
              href={`https://www.zhihu.com/org/${props.url_token}/posts`}
            >
              <div>文章</div>
              <strong>{formatNumber(props.articles_count)}</strong>
            </a>
            <a
              className="board-item"
              href={`https://www.zhihu.com/org/${props.url_token}/followers`}
            >
              <div>关注者</div>
              <strong>{formatNumber(props.follower_count)}</strong>
            </a>
          </div>
          <div className="operate">
            <div className="btn">已关注</div>
            <div className="btn">
              <span className="icon iconfont icon-24gf-bubbles4"></span>
              发私信
            </div>
          </div>
        </HoverCardItem>
      </JPopoverWrapper>
    </Skeleton>
  );
});
