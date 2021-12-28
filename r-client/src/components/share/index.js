import React, { memo, useCallback } from 'react';
import classNames from 'classnames';
import copy from "copy-to-clipboard";
import { Dropdown, Menu, message } from 'antd';

import { JShareWrapper } from './style';
import styles from './style.module.css';

export default memo(function JShare(props) {
  const handleMenuClick = useCallback((value) => {
    if (value.key === '0') {
      copy(`${props.text}- 知乎 ${props.url}`);
      message.open({ content: '链接复制成功' })
    }
  }, [props])

  const qrCodeUrl = decodeURIComponent(`${props.url}#showWechatShareTip`)

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="0" className={styles.menu_item}>
        <span
          className={classNames([styles.icon, "iconfont", "icon-lianjie"])}
        ></span>
        <span className={styles.text}>复制链接</span>
      </Menu.Item>
      <Menu.Item key="1" className={styles.menu_item}>
        <span
          className={classNames([
            styles.icon,
            "iconfont",
            "icon-icon_xinlang-chunselogo",
            styles.xinlang,
          ])}
        ></span>
        <span className={styles.text}>新浪微博</span>
      </Menu.Item>
      <Menu.Item key="2" className={styles.wexinhover}>
        <div className={styles.weixin}>
          <div className={styles.weixinBox}>
            <span
              className={classNames([
                styles.icon,
                "iconfont",
                "icon-weixin",
                styles.weixinIcon,
              ])}
            ></span>
            <span>微信扫一扫</span>
          </div>
          <img
            className={styles.qrCode}
            src={`https://www.zhihu.com/qrcode?url=${qrCodeUrl}`}
            alt=""
          />
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <JShareWrapper>
      <Dropdown
        placement="bottomCenter"
        overlayClassName={styles.dropdown}
        overlay={menu}
        trigger={["click"]}
        arrow
      >
        <div className="shareMenu">
          <span className="icon iconfont icon-zhifeiji"></span>
          分享
        </div>
      </Dropdown>
    </JShareWrapper>
  )
})
