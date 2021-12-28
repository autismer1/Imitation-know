import React, { memo, useCallback, useState } from 'react';
import { Popover } from 'antd';

import JPopover from "components/popover";
import { MEMBERS } from "@/services/api/major";

export default memo(function JAppPopover(props) {
  
  const [userInfo, setUserInfo] = useState({});
    const handleMouseEnter = useCallback(async () => {
      const data = await MEMBERS(props.url_token);
      setUserInfo(data);
    }, [props.url_token]);

  return (
    <Popover
      content={<JPopover {...userInfo} />}
      onMouseEnter={handleMouseEnter}
      placement={props.placement && "bottomRight"}
    >
      {props.avatar}
    </Popover>
  )
})
