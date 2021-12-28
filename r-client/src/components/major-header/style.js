import styled from "styled-components";

export const JMajorHeaderWrapper = styled.div`

  .divider {
    flex: 1 1 356px;
  }
`;

export const HeaderLink = styled.div`
  display: flex;
  align-items: center;

  .logo {
    width: 71px;
    height: 50px;
    cursor: pointer;
  }

  .link-tabs {
    margin-left: 25px;
    margin-right: 15px;
    border-bottom: none;
    display: flex;
    flex-shrink: 0;

    .tab-item {
      position: relative;
      display: inline-block;
      padding: 0 22px;

      a {
        position: relative;
        display: inline-block;
        padding: 14px 0;
        font-size: 15px;
        line-height: 22px;
        color: #8590a6;
        text-align: center;
        cursor: pointer;

        &.active {
          color: #06f !important;
        }
      }
    }
  }
`;

export const HeaderSearch = styled.div`
  flex: 1 1 396px;

  .search {
    display: flex;
    max-width: 482px;
    margin: auto;
  }

  .ant-input-affix-wrapper {
    height: 34px;
    border-radius: 30px;
    background-color: #f6f6f6;

    .ant-input {
      background-color: #f6f6f6;
    }
    :focus,
    :hover,
    :active {
      border-color: #d9d9d9;
      box-shadow: none;
    }
  }

  .btn {
    border-radius: 999px;
    min-width: 70px !important;
    margin-left: 12px;
    border: 0;
    text-align: center;
    height: 34px !important;
    padding: 0 14px;
    min-height: auto;
    color: #fff;
    background-color: #06f;
  }
`;
