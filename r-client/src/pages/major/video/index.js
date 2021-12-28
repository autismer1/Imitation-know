import React, { memo, useEffect, useState } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAllVideoAction } from '../store/actions';

import { JVideoWrapper } from './style';
import JVideoItem from './video-item';

import { throttle, pullRefresh }  from "@/utils/util";

export default memo(function JVideo() {
  const { video } = useSelector(state => ({
    video: state.getIn(['major', 'video'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllVideoAction())
  }, [dispatch])

  // 下拉加载
  const [offset, setOffset] = useState(24)
  useEffect(() => {
    window.onscroll = throttle(() => {
      if (pullRefresh()) {
        setOffset(offset + 12)
        dispatch(getAllVideoAction(offset))
      }
    }, 1500);

    return () => {
      window.onscroll = ''
    }
  }, [dispatch, offset])

  return (
    <JVideoWrapper>
      {
        video.map(item => <JVideoItem key={item.id} {...item} />)
      }
    </JVideoWrapper>
  )
})
