import React, { memo } from "react";

import JAppPopover from "components/app-popover";

import { JUserTipWrapper } from "./style";


export default memo(function JUserTip(props) {

  return (
    <JUserTipWrapper>
      <JAppPopover
        placement="bottomRight"
        url_token={props.url_token}
        avatar={
          <span className="author-avatar">
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a
              href={`https://www.zhihu.com/${props.user_type}/${props.url_token}`}
              target="_blank"
            >
              <img src={props.avatar_url} alt={props.name} />
            </a>
          </span>
        }
      />
      <div className="author-content">
        <JAppPopover
          placement="bottomRight"
          url_token={props.url_token}
          avatar={
            <div className="title">{props.name}</div>
          }
        />
        <div className="detail text-nowrap">{props.headline}</div>
      </div>
    </JUserTipWrapper>
  );
});
