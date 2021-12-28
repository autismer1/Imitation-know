import React, { memo } from "react";
import moment from "moment";

import { JDiscoverSpecialItemWrapper, JAWrapper } from "./style";

import { formatNumber } from "@/utils/format";

export default memo(function JDiscoverSpecialItem(props) {
  return (
    <JDiscoverSpecialItemWrapper className="wrapper container-box-shadow">
      <JAWrapper
        className="banner"
        href={`https://www.zhihu.com/special/${props.id}`}
        target="_blank"
      >
        <img src={props.banner} alt="" />
      </JAWrapper>
      <div className="header">
        <div className="info">
          <JAWrapper
            className="text-two-nowrap discover-a-title"
            href={`https://www.zhihu.com/special/${props.id}`}
            target="_blank"
          >
            {props.title}
          </JAWrapper>
          <div className="count discover-count">
            <span>
              {moment(props.updated * 1000)
                .endOf("hour")
                .fromNow()}
              更新
            </span>
            <span>{formatNumber(props.view_count)} 浏览</span>
          </div>
        </div>
        <div className="follow-btn">
          <div className="btn">关注主题</div>
        </div>
      </div>
      <div className="special-contentlist">
        {props.section_list.slice(0, 3).map((sitem) => {
          return (
            <div className="special-content-item" key={sitem.section_id}>
              <JAWrapper className="tips">
                {sitem.section_title}
              </JAWrapper>
              <JAWrapper className="text-nowrap title" href="#/">
                NO.1云南哀牢山四名失联人员已找到，均已遇难，具体原因是什么？有哪些细节需要关注？
              </JAWrapper>
            </div>
          );
        })}
      </div>
    </JDiscoverSpecialItemWrapper>
  );
});
