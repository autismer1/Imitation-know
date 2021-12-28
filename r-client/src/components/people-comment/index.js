import React, { memo, createElement, useState, useCallback } from "react";
import moment from "moment";
import classNames from "classnames";

import { Comment, Tooltip, Avatar, Skeleton } from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

import { JPeopleCommentWrapper, CommentHeader, CommentInput } from "./style";

import JAppPopover from "components/app-popover";

const ExampleComment = memo(
  ({ children, content, author, created_time, vote_count }) => {
    const [likes, setLikes] = useState(vote_count || 0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
      setLikes(likes + 1);
      if (dislikes > 0) {
        setDislikes(dislikes - 1);
      }
      setAction("liked");
    };

    const dislike = () => {
      if (likes > 0) {
        setLikes(likes - 1);
      }
      setDislikes(dislikes + 1);
      setAction("disliked");
    };

    const actions = [
      <Tooltip key="comment-basic-like" title="喜欢">
        <span onClick={like}>
          {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
        </span>
      </Tooltip>,
      <Tooltip key="comment-basic-dislike" title="不喜欢">
        <span onClick={dislike}>
          {React.createElement(
            action === "disliked" ? DislikeFilled : DislikeOutlined
          )}
          <span className="comment-action">{dislikes}</span>
        </span>
      </Tooltip>,
      <Tooltip key="comment-basic-reply-to" title="举报">
        <span>举报</span>
      </Tooltip>,
    ];

    return (
      <Comment
        actions={actions}
        author={
          // eslint-disable-next-line react/jsx-no-target-blank
          <a
            href={`https://www.zhihu.com/${author.member.user_type}/${author.member.url_token}`}
            target="_blank"
          >
            {author.member.name}
          </a>
        }
        avatar={
          <JAppPopover
            placement="bottomRight"
            url_token={author.member.url_token}
            avatar={<Avatar src={author.member.avatar_url} alt={author.member.name} />}
          />
        }
        content={<p dangerouslySetInnerHTML={{ __html: content }}></p>}
        datetime={<span>{moment.unix(created_time).format("YYYY-MM-DD")}</span>}
      >
        {children}
      </Comment>
    );
  }
);

export default memo(function JPeopleComment(props) {
  // 判断输入框聚焦
  const [showBtn, setShowBtn] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const onChangeValue = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  return (
    <Skeleton active loading={props.data ? false : true}>
      <JPeopleCommentWrapper>
        <div className="comments">
          <CommentHeader
            className={classNames([!props.common_counts && "is-to-none"])}
          >
            <div className="title">
              <h2>{props.common_counts} 条评论</h2>
            </div>
            <div className="options">
              <span className="icon iconfont icon-jiantou_zuoyouqiehuan"></span>
              切换为时间顺序
            </div>
          </CommentHeader>
          <div
            className={classNames([
              "comment-item",
              !props.common_counts && "is-to-none",
            ])}
          >
            {props.data && recursion(props.data)}
          </div>
          <CommentInput>
            <div
              className={classNames([
                "input-container input--normal",
                showBtn && "input--active",
              ])}
            >
              <div className="input-wrap">
                <div className="input_w">
                  <input
                    className="input"
                    type="text"
                    onChange={(e) => onChangeValue(e)}
                    onFocus={(e) => setShowBtn(true)}
                    onBlur={(e) => setShowBtn(false)}
                    placeholder="已开启预审评论，评论由机构筛选后公开"
                  />
                </div>
                <div className="input-action">
                  <span className="icon iconfont icon-tupian-xianxing">
                    <span className="icon iconfont icon-shouye-lvshizhaopianVIPjiaobiao"></span>
                  </span>
                  <span className="icon iconfont icon-xiaolian"></span>
                </div>
              </div>
              <div
                className={classNames([
                  "release",
                  showBtn && "is-active",
                  inputValue && "is--value",
                ])}
              >
                发布
              </div>
            </div>
          </CommentInput>
        </div>
      </JPeopleCommentWrapper>
    </Skeleton>
  );
});

const recursion = (data) => {
  return data.map((item) => {
    return (
      <ExampleComment className="item" key={item.id} {...item}>
        {item.child_comments && recursion(item.child_comments)}
      </ExampleComment>
    );
  });
};
