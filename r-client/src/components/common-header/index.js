import React, { memo } from "react";
import classNames from "classnames";

import { JHeaderWrapper } from "./style";

import JAppHeader from "components/app-header";
import JMajorHeader from "components/major-header";
import JSeat from "components/seat-container";

import useScrollTop from "@/hooks/scroll-top";

export default memo(function JCommonHeader(props) {
  let direction = useScrollTop()[1];
  
  return (
    <div>
      <JHeaderWrapper className="container-box-shadow">
        <div className={classNames([direction && "top-fixed", 'app-header'])}>
          <JAppHeader {...props} />
        </div>
        <div className={classNames([!direction && "top-to-fixed", 'app-header', 'major'])}>
          <JMajorHeader navTab={props.navTab} />
        </div>
      </JHeaderWrapper>
      <JSeat />
    </div>
  );
});
