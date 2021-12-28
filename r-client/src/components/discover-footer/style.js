import styled from "styled-components";

export const JDiscoverFooterWrapper = styled.div`
  margin-top: 64px;
  height: 24px;
  font-size: 13px;
  color: #8590a6;
  display: flex;
  align-items: center;
  justify-content: center;

  a:first-child::before {
    content: "";
    margin: 0;
  }

  a::before {
    content: "·";
    margin: 0 3px;
  }

  span {
    margin-left: 4px;
    line-height: 24px;
  }
`;

export const JAWrapper = styled.a``;
