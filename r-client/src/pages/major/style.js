import styled from "styled-components";

export const JMaiorWrapper = styled.div`
  .wrap-v1 {
    box-sizing: content-box;
  }
`;

export const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 694px;
  background-color: #fff;
  margin-right: 10px;
`;

export const ContentHeader = styled.div`
  border-bottom: 1px solid #f0f2f7;
  height: 58px;
  display: flex;

  a {
    align-items: center;
    display: flex;
    font-size: 16px;
    margin: 0 22px;

    &.active {
      color: #06f;
      font-weight: 500;
    }
  }
`;

export const Sider = styled.div``;
