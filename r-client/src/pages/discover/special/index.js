import React, { memo, useEffect } from 'react';
import moment from 'moment';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getAllSpecialAction } from '../store/actions';

import { JSpecialWrapper, JSpecialHeader, JSpecialContent, JAWrapper } from './style';

import { formatNumber } from '@/utils/format';

import JAppHeader from 'components/app-header';
import JDiscoverFooter from 'components/discover-footer';
import JSeat from 'components/seat-container';

export default memo(function JSpecial(props) {
  const { special } = useSelector(state => ({
    special: state.getIn(['discover', 'special'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllSpecialAction(10, 10))
  }, [dispatch])

 return (
  <JSpecialWrapper>
    <div className="app-header container-box-shadow">
      <JAppHeader {...props} />
    </div>
    <JSeat />

    <JSpecialHeader className="container-box-shadow">
      <div className="wrap-v1">
        <span className="icon iconfont icon-icon"></span>
        <span className="title">全部专题</span>
        <span className="count">共有 {special && special.paging.total} 个专题</span>
      </div>
    </JSpecialHeader>

    <JSpecialContent className="wrap-v1">
      {
        special.data && special.data.map(item => {
          return (
            <div className="special-item container-box-shadow" key={item.id}>
              <div className="item-banner">
                <LazyLoad height={140}>
                  <img src={item.banner} alt="" />
                </LazyLoad>
              </div>
              <div className="item-body">
                <div className="body-header">
                  <div className="header-infos">
                    <JAWrapper className="info-title text-nowrap" target="_blank" href={`https://www.zhihu.com/special/${item.id}`}>{item.title}</JAWrapper>
                    <div className="info-related">
                      <span>{moment(item.updated * 1000).endOf('hour').fromNow()}更新</span>
                      <span>{formatNumber(item.view_count)} 次浏览</span>
                    </div>
                  </div>
                  <div className="follow-btn">
                    <div className="btn">关注主题</div>
                  </div>
                </div>
                <JAWrapper className="body-intro text-two-nowrap" target="_blank" href={`https://www.zhihu.com/special/${item.id}`}>{item.introduction}</JAWrapper>
                <div className="body-sections">
                  {
                    item.section_list.map(sitem => {
                      return <JAWrapper className="text-nowrap sections-link" target="_blank" href={`https://www.zhihu.com/special/${item.id}#NewsSpecial-SubModule-${sitem.section_id}`} key={sitem.section_id}>{sitem.section_title}</JAWrapper>
                    })
                  }
                </div>
              </div>
            </div>
          )
        })
      }
    </JSpecialContent>

    <JDiscoverFooter style={{marginTop: '20px', paddingBottom: '80px', height: ''}} />
  </JSpecialWrapper>
 )
})
