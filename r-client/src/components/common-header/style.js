import styled from "styled-components";

export const JHeaderWrapper = styled.div`
  position: fixed;
  top: 0px;
  height: 52px;
  width: 100%;
  background: #fff;
  overflow: hidden;
  z-index: 100;

  .major {
    position: relative !important;
  }

  .top-fixed {
    transform: translateY(-100%);
  }

  .top-to-fixed {
    position: absolute;
    transform: translateY(100%);
  }
`;
