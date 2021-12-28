import React, { memo } from "react";
import moment from 'moment';
import { Tooltip } from 'antd';

import JAppPopover from "components/app-popover";

import JStoryContent from 'components/story-content';
import {
  JContentItemWrapper,
  ItemTip,
} from "./style";

import text from "@/assets/images/text.png";

export default memo(function ContentItem(props) {

  return (
    <JContentItemWrapper className="topstoryItem">
      <ItemTip>
        <span className="user-link">
          <JAppPopover
            url_token={props.target.author.url_token}
            avatar={
            // eslint-disable-next-line react/jsx-no-target-blank
            <a
              href="https://www.zhihu.com/org/zhihu-haowutuijian"
              target="_blank"
            >
              知乎好物推荐
            </a>}
          />
          <Tooltip title={props.target.author.user_type === 'people' ? '已认证个人' : '已认证账号'}>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href={props.target.url} target="_blank" className="sign">
              <img src={text} alt="" />
            </a>
          </Tooltip>
        </span>
        {props.action_text_tpl.replace("{}", "")}
        <span className="bull"> · </span>
        {moment(props.created_time * 1000).endOf('day').fromNow()}
      </ItemTip>
      <h2 className="content-item-title">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href={props.target.url} target="_blank">
          {props.target.title}
        </a>
      </h2>
      
      <JStoryContent {...props.target} length={88} apiType="articles" articleType="text" />
    </JContentItemWrapper>
  );
});
