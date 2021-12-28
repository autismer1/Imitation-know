import React, { memo, forwardRef, useState, useCallback } from 'react';

import Share from '../share';
import JPeopleComment from '../people-comment'

import { JArticleActionWrapper } from './style';
import classNames from 'classnames';

import { FOLLOW_COMMENT } from '@/services/api/major';

const JArticleAction = forwardRef((props, ref) => {
  const [comments, setComments] = useState([])

  const getComment = useCallback(async (id) => {
    const data = await FOLLOW_COMMENT(props.apiType + 's', id)
    setComments(data)
  }, [props.apiType])

  // 判断是否显示评论列表
  const [isShow, setIsShow] = useState(true)
  const handleOpenComment = useCallback(async () => {
    function set() {
      setIsShow(!isShow)
    }
    await set()
    if (isShow) {
      getComment(props.id)
    }
  }, [isShow, getComment, props.id])

  return (
    <JArticleActionWrapper ref={ref}>
      <div className={classNames(['action-warpper', props.fixed === 'need' ? 'reset-m' : ''])}>
        <span className="vote-box">
          <div className="vote-btn">
            <span className="icon iconfont icon-sanjiao2"></span>
            赞同 {props.voteup_count}
          </div>
          <div className="vote-btn">
            <span className="icon iconfont icon-sanjiao1"></span>
          </div>
        </span>
        <div className="action-btn" onClick={handleOpenComment}>
          <span className="icon iconfont icon-pinglun"></span>
          {isShow ? props.comment_count ? `${props.comment_count} 条评论` : '添加评论' : '收起评论'}
        </div>
        <div className="action-btn">
          <Share url={props.url} text={props.title} />
        </div>
        <div className="action-btn">
          <span className="icon iconfont icon-shoucang"></span>
          收藏
        </div>
        <div className="action-btn">
          <span className="icon iconfont icon-icon_tip_off"></span>
          举报
        </div>
        <div className={classNames(["action-btn hide", props.hide && 'active'])} onClick={props.onHandleText}>收起</div>
        <div className={classNames([isShow ? 'is-to-none' : 'is-to-block'])}>
          <JPeopleComment {...comments} />
        </div>
      </div>
    </JArticleActionWrapper>
  )
})

export default memo(JArticleAction)
