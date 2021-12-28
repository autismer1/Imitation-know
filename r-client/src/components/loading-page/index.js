import React, { memo } from 'react';
import { Spin } from 'antd';

import { LoadingWrapper } from './style'

export default memo(function Loading() {
  return (
    <LoadingWrapper>
      <Spin tip="Loading..."></Spin>
    </LoadingWrapper>
  )
})
