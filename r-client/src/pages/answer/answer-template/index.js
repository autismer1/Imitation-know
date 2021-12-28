import React, { memo, useCallback } from "react";
import moment from "moment";

import { formatNumber } from "@/utils/format";

export default memo(function JAnswerTemplate(props) {
  const checkReasonType = useCallback((item) => {
    switch (item.reason_type) {
      case "invite_new_question_v2":
        return item.icons[0].url;
      case "invite_recent_view_question":
        return item.icons[1].url;
      default:
        return item.question.author.avatar_url;
    }
  }, []);

  return (
    <>
      <div className="questions-item">
        {props.question ? props.reason && (
          <div className="item-subTitle">
            <img
              className="sub-head-avatar"
              src={checkReasonType(props)}
              alt=""
            />
            <div className="sub-head-reason">{props.reason}</div>
          </div>
        ) : (
          <div className="item-subTitle">
            <img
              className="sub-head-avatar"
              src={props.head.avatar_url}
              alt=""
            />
            <div className="sub-head-reason">
              {props.content.title} {props.content.sub_title}
            </div>
          </div>
        )}
        <div className="item-content">
          <h2 className="content-title">
            <a href="#/" target="_blank">
              {props.question ? props.question.title : props.content.text}
            </a>
          </h2>
          <div className="write-and-follower">
            <a className="write-btn" href="#/">
              <span className="icon iconfont icon-bianji1"></span>
              写回答
            </a>
            {props.question ? (
              <div className="follower-status">
                <span>{formatNumber(props.question.answer_count)} 回答</span>
                <span>{formatNumber(props.question.follower_count)} 关注</span>
                <span>
                  {Date.now() - props.question.updated_time * 1000 > 0 &&
                    moment(props.question.updated_time * 1000)
                      .endOf("h")
                      .fromNow()}
                </span>
              </div>
            ) : (
              <div className="follower-status">
                {props.target_source.icon && <img src={props.target_source.icon} alt="" />}
                <span>{props.target_source.sub_text}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
});
