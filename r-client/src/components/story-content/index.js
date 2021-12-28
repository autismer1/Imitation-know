import React, { memo, useRef, useState, useCallback, useEffect } from "react";
import classNames from "classnames";

import {
  JStoryContentWrapper,
  ItemContentBox,
  ItemPartContent,
  ItemActions,
} from "./style";

import JArticleAction from "components/article-action";
import JUserTip from "components/user-content-tip";

import { intercept } from "@/utils/util";

export default memo(function JStoryContent(props) {
  // 用来判断展开 / 收起状态
  const [state, setState] = useState({ [props.id]: false });

  // 获取元素距离顶部的高度
  const [eleOffsetTop, setEleOffsetTop] = useState(0);
  const container = useRef();

  // 获取元素的高度以及距离顶部的高度和
  const [Y, setY] = useState({ [props.id]: 0 });

  // 获取滚动条高度
  const [top, setTop] = useState({ [props.id]: 0 });

  // 控制是否浮动
  const [fixed, setFixed] = useState({ [props.id]: false });

  const showContent = useRef();

  const handleClick = useCallback((id) => {
    setTimeout(() => {
      setEleOffsetTop(container.current.offsetTop - 100);
      setY({
        [id]: showContent.current.clientHeight + showContent.current.offsetTop,
      });

    }, 100);
    setState({ [props.id]: true });
  }, [props.id]);

  const handleText = useCallback(() => {
    setY({ [props.id]: 0 });
    setTop({ [props.id]: 0 });
    setState({ [props.id]: false });
    setFixed({ [props.id]: false });
    if (document.documentElement.scrollTop) {
      document.documentElement.scrollTop = eleOffsetTop;
    } else {
      document.body.scrollTop = eleOffsetTop;
    }
  }, [eleOffsetTop, props.id]);

  useEffect(() => {
    window.onscroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (top[props.id]) {
        setFixed({[props.id]: top[props.id] < scrollTop});
      } else {
        if (Y[props.id] < 600) {
          setFixed({[props.id]: true});
        } else {
          setFixed({[props.id]: Y[props.id] < scrollTop + 1000});
          if (fixed[props.id]) {
            setTop({ [props.id]: scrollTop });
          }
        }
      }
    };

    return () => {
      window.onscroll = "";
    };
  }, [Y, fixed, props.id, top, eleOffsetTop]);

  return (
    <JStoryContentWrapper>
      <ItemContentBox ref={container}>
        <ItemPartContent className={classNames([!state[props.id] && "part-content"])}>
          <span
            className={classNames([state[props.id] ? "is-to-none" : "is-to-inline"])}
            dangerouslySetInnerHTML={{
              __html: intercept(props.excerpt, props.length),
            }}
          ></span>
          <div
            ref={showContent}
            className={classNames([!state[props.id] ? "is-to-none" : "is-to-block"])}
          >
            {props.type === "zvideo" && <JUserTip {...props.author} />}
            <span
              className={classNames([props.type && "is-inner"])}
              dangerouslySetInnerHTML={{
                __html: props.content ? props.content : props.excerpt,
              }}
            ></span>
          </div>
          {!state[props.id] && (
            <div className="read-more" onClick={(e) => handleClick(props.id)}>
              阅读全文
            </div>
          )}
        </ItemPartContent>
        <ItemActions>
          <div
            className={classNames([
              !state[props.id] ? "is-to-none" : "is-to-block",
              fixed[props.id] ? "is--visibility" : "is--active",
              props.type === "zvideo" && "is-to-none",
            ])}
          >
            <JArticleAction
              fixed={true && "need"}
              voteup_count={props.voteup_count}
              comment_count={props.comment_count}
              id={props.id}
              url={props.url}
              title={props.title}
              apiType={props.type}
              hide={true}
              onHandleText={(e) => handleText()}
            />
          </div>
          <JArticleAction
            voteup_count={props.voteup_count}
            comment_count={props.comment_count}
            id={props.id}
            url={props.url}
            title={props.title}
            apiType={props.type}
            hide={state[props.id]}
            onHandleText={(e) => handleText()}
          />
        </ItemActions>
      </ItemContentBox>
    </JStoryContentWrapper>
  );
});
