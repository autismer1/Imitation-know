import React, { memo } from "react";

import { JDiscoverFooterWrapper, JAWrapper } from "./style";

export default memo(function JDiscoverFooter(props) {
  return (
    <JDiscoverFooterWrapper style={props.style}>
      <JAWrapper>刘看山</JAWrapper>
      <JAWrapper>知乎指南</JAWrapper>
      <JAWrapper>知乎协议</JAWrapper>
      <JAWrapper>应用</JAWrapper>
      <JAWrapper>工作</JAWrapper>
      <JAWrapper>联系我们</JAWrapper>
      <span>© 2021 知乎</span>
    </JDiscoverFooterWrapper>
  );
})
