import React, { memo } from "react";
import classNames from 'classnames'
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

import { Affix } from 'antd';

import JAppHeader from "components/app-header";
import JSeat from "components/seat-container";
import JAppSider from "components/app-sider";

import { AnswerNavTab } from '@/common/local-data';

import { JAnswerWrapper, Layout, Content, ContentHeader } from "./style";

export default memo(function Answer(props) {

  return (
    <JAnswerWrapper>
      <div className="app-header container-box-shadow">
        <JAppHeader {...props} />
      </div>
      <JSeat/>

      <div className="wrap-v1">
        <Layout>
          <Content>
            <Affix offsetTop={60}>
              <ContentHeader>
                {AnswerNavTab.map((item) => {
                  return (
                    <NavLink to={item.link} key={item.name}>
                      <span className={classNames(['icon iconfont', `icon-${item.icon}`])}></span>
                      {item.name}
                    </NavLink>
                  )
                })}
              </ContentHeader>
            </Affix>
            <div className="questions">
              {renderRoutes(props.route.routes)}
            </div>
          </Content>
          <JAppSider {...props} />
        </Layout>
      </div>
    </JAnswerWrapper>
  );
});
