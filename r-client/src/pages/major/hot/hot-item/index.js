import React, { memo } from "react";
import classNames from "classnames";
import LazyLoad from "react-lazyload";

import { JHotItemWrapper, ItemIndex, ItemContent, ItemImg } from "./style";

import { formatImage } from '@/utils/format';
import Share from "components/share";

export default memo(function HotItem(props) {

  return (
    <JHotItemWrapper>
      <ItemIndex>
        <div className={classNames(["rank", props.rank <= 3 && "hot"])}>
          {props.rank}
        </div>
      </ItemIndex>

      <ItemContent>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a target="_blank" href={props.target.link.url}>
          <h2 className="title text-two-nowrap">
            {props.target.title_area.text}
          </h2>
          <p className="excerp text-nowrap">{props.target.excerpt_area.text}</p>
        </a>
        <div className="content-metrics metrics-bottom">
          <span className="icon iconfont icon-redu"></span>
          <span>{props.target.metrics_area.text}</span>
          <span className="action">
            <Share url={props.target.link.url} text={props.target.title_area.text} />
          </span>
        </div>
      </ItemContent>

      <ItemImg href={props.target.link.url}>
        <LazyLoad height={105}>
          <img src={formatImage(props.target.image_area.url)} alt="" />
        </LazyLoad>
      </ItemImg>
    </JHotItemWrapper>
  );
})