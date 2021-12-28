import styled from "styled-components";

export const JAnswerWrapper = styled.div`
  .wrap-v1 {
    padding: 0;
    margin: 10px auto;
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
  margin-bottom: 10px;

  .questions {
    padding: 0 20px;

    .questions-item {
      border-bottom: 1px solid #f6f6f6;
      position: relative;
      padding: 16px 20px 16px 0;

      .item-subTitle {
        align-items: center;
        display: flex;
        font-size: 15px;
        color: rgb(133, 144, 166);
        margin-bottom: 12px;

        .sub-head-avatar {
          width: 16px;
          height: 16px;
          margin-right: 8px;
        }

        .sub-head-reason {
        }
      }

      .item-content {
        .content-title {
          margin: -4px 0;
          font-size: 18px;
          font-weight: 600;
          color: #121212;
          line-height: 1.6;
        }

        .write-and-follower {
          display: flex;
          align-items: center;
          margin-top: 20px;

          .write-btn {
            background: #06f;
            border: 1px solid #06f;
            width: 96px;
            height: 28px;
            line-height: 26px;
            border-radius: 3px;
            color: #fff;
            font-size: 14px;
            text-align: center;

            .icon {
              font-size: 12px;
              margin-right: 6px;
            }
          }

          .follower-status {
            color: #8590a6;
            font-size: 14px;
            margin-left: 16px;

            img {
              width: 16px;
              height: 16px;
            }

            span:first-child::before {
              content: '';
              margin: 0;
            }

            span::before {
              content: '·';
              margin: 0 3px;
            }
          }
        }
      }
    }
  }
`;

export const ContentHeader = styled.div`
  background: #fff;
  border-bottom: 1px solid #f6f6f6;
  height: 68px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 0 2px 2px 0;

  a {
    align-items: center;
    display: flex;
    margin: 0 10px;
    font-size: 14px;
    padding: 0 12px;
    height: 32px;
    border-radius: 16px;
    color: #444;
    background: rgba(133, 144, 166, 0.12);

    .icon {
      margin-right: 3px;
    }

    &.active {
      color: #06f;
      font-weight: 500;
      background: rgba(0, 102, 255, 0.08);
      box-shadow: 0 6px 10px 0 rgb(0 102 255 / 6%);
    }
  }
`;
