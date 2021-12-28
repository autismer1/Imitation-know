import styled from "styled-components";
import login_bg from "@/assets/images/login_bg.png";

export const JLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${login_bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #b8e5f8;
  width: 100%;
  height: 100vh;
  overflow: auto;

  .signFlowHomePage {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    min-height: 688px;
    height: calc(100% - 42px);

    .logo {
      width: 128px;
      height: 81px;
      margin-bottom: 24px;
    }
  }
`;

export const LoginForm = styled.div`
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  border-radius: 2px;
  width: 400px;
  text-align: center;

  .signFlow {
    padding: 0 24px 34px;

    .signFlow-tabs {
      text-align: left;

      .tab-item {
        width: 80px;
        font-size: 16px;
        line-height: 60px;
        text-align: center;
        height: 60px;
        margin-right: 24px;
        display: inline-block;
        color: #444;
        cursor: pointer;

        &.tab-active {
          position: relative;
          color: #121212;
          font-weight: 600;
          :after {
            display: block;
            position: absolute;
            bottom: 0;
            content: "";
            width: 100%;
            height: 3px;
            background-color: #06f;
          }
        }
      }
    }

    .ant-form {
      margin-top: 24px;

      .ant-col {
        max-width: 100%;

        .ant-form-item-explain {
          text-align: left;
        }

        .input {
          background: transparent;
          height: 48px;
          padding: 0;
          line-height: 24px;
          border: none;
          border-bottom: 1px solid #ebebeb;

          &.ant-input-affix-wrapper {
            :focus {
              box-shadow: none;
            }
          }

          &.ant-input-affix-wrapper-focused {
            box-shadow: none;
          }

          &.ant-input {
            :focus {
              box-shadow: none;
            }
          }
        }
      }

      .ant-btn {
        width: 100%;
        margin-top: 20px;
      }
    }

    .sign-tips {
      font-size: 13px;
      padding: 12px 0;
      color: grey;
      text-align: left;
      line-height: 20px;
      white-space: wrap;
      word-spacing: 3px;

      a {
        color: grey;
      }
    }
  }
`;

export const LoginOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 24px;

  div {
    cursor: pointer;

    :first-child {
      color: #175199;
    }

    :last-child {
      color: #8590a6;
    }
  }
`;

export const LoginFooter = styled.div`
  padding-bottom: 20px;
  text-shadow: 0 1px 2px #999;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
  color: #fff;

  a {
    img {
      margin-right: 2px;
      width: auto;
      height: auto;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  a:not(:last-child):after,
  span:not(:last-child):after {
    content: " · ";
    white-space: pre;
    display: inline-block;
  }
`;
