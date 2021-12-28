import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";
import { BackTop } from 'antd';

import { NavTabList } from "@/common/local-data";
import { JMaiorWrapper, Layout, Content, ContentHeader, Sider } from "./style";
import JCommonHeader from 'components/common-header';
import JAppSider from "components/app-sider";

export default memo(function Major(props) {

  return (
    <JMaiorWrapper>
      <JCommonHeader {...props} navTab={NavTabList} />
      
      <div className="wrap-v1">
        <Layout>
          <Content>
            <ContentHeader>
              {NavTabList.map((item) => {
                return (
                  <NavLink to={item.link} key={item.name}>
                    {item.name}
                  </NavLink>
                )
              })}
            </ContentHeader>
            {renderRoutes(props.route.routes)}
          </Content>
          <Sider>
            <JAppSider hide={true} {...props} />
          </Sider>
        </Layout>
      </div>
      <BackTop />
    </JMaiorWrapper>
  );
});
