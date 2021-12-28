import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getAllCollectAction } from '../store/actions';

import { JCollectWrapper, JSpecialHeader, JContentWrapper, JAWrapper } from './style';

import JAppHeader from "components/app-header";
import JSeat from "components/seat-container";
import JDiscoverFooter from 'components/discover-footer';
import JAppPopover from "components/app-popover";

import { formatNumber } from '@/utils/format';

export default memo(function JCollect(props) {

  const { collect } = useSelector(state => ({
    collect: state.getIn(['discover', 'collect'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCollectAction(10, 10))
  }, [dispatch])

 return (
  <JCollectWrapper>
   <div className="app-header container-box-shadow">
      <JAppHeader {...props} />
    </div>
    <JSeat />

    <JSpecialHeader className="container-box-shadow">
      <div className="wrap-v1">
        <span className="icon iconfont icon-shoucang1"></span>
        <span className="title">热门收藏夹</span>
      </div>
    </JSpecialHeader>

    <JContentWrapper>
      {
        collect && collect.map(item => {
          return (
            <div className="container-box-shadow collect-item" key={item.id}>
              <div className="item-left-area">
                <JAWrapper className="left-area-title text-nowrap">{item.title}</JAWrapper>
                <div className="left-area-creator">
                  <JAppPopover 
                    avatar={
                      <span className="creator-avatar">
                        <img src={item.creator.avatar_url} alt="" />
                      </span>
                    }
                    placement="bottomRight"
                    url_token={item.creator.url_token}
                  />
                  <span className="creator-name text-nowrap">{item.creator.name}</span>
                  <span className="creator-suffix">创建</span>
                </div>
                <div className="left-area-related">
                  <div className="follow-btn">
                    <div className="btn">关注收藏夹</div>
                  </div>
                  <div className="follow-count">{formatNumber(item.follower_count)} 关注</div>
                </div>
              </div>
              <div className="item-right-area">
                <div className="right-area-info">
                  <JAWrapper className="right-area-title text-nowrap" href={item.favitems[0].content.question && `https://www.zhihu.com/question/${item.favitems[0].content.question.id}/anwser/${item.favitems[0].content.id}`}>
                    {item.favitems[0].content.question && item.favitems[0].content.question.title}
                  </JAWrapper>
                  <div className="right-area-excerpt text-two-nowrap">
                    {item.favitems[0].content.excerpt}
                  </div>
                  <div className="right-area-tags">
                    <span className="type-tag">回答</span>
                    <span className="count-tag discover-count">{item.favitems[0].content.voteup_count} 赞同</span>
                    <span className="count-tag discover-count">{item.favitems[0].content.comment_count} 评论</span>
                  </div>
                </div>
                <JAWrapper className="right-area-entry" href={`https://www.zhihu.com/collection/${item.id}`}>已收藏 {formatNumber(item.total_count)} 条内容</JAWrapper>
              </div>
            </div>
          )
        })
      }
    </JContentWrapper>

    <JDiscoverFooter style={{marginTop: '20px', paddingBottom: '80px', height: ''}} />
  </JCollectWrapper>
 )
})
