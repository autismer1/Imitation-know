import styled from "styled-components";

export const JCollectWrapper = styled.div``;

export const JSpecialHeader = styled.div`
  background-color: #fff;

  .wrap-v1 {
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0;

    .icon {
      font-size: 26px;
      color: #06f;
    }

    .title {
      margin-left: 12px;
      font-size: 25px;
      font-weight: 600;
    }
  }
`;

export const JContentWrapper = styled.div`
  width: 1000px;
  margin: 10px auto 0;

  .collect-item {
    margin-top: 10px;
    width: 1000px;
    background-color: #fff;
    height: 179px;
    display: flex;
    padding: 24px;

    :first-child {
      margin-top: 0;
    }

    .item-left-area {
      width: 270px;
      height: 131px;

      .left-area-title {
        display: block;
        height: 24px;
        line-height: 24px;
        font-size: 16px;
        font-weight: 600;
      }

      .left-area-creator {
        display: flex;
        align-items: center;
        margin-top: 16px;
        height: 28px;

        .creator-avatar {
          height: 28px;
          width: 28px;
          line-height: 28px;
        }

        .creator-name {
          margin-left: 8px;
          color: #444;
          cursor: pointer;
          font-weight: 500;
        }

        .creator-suffix {
          font-size: 14px;
          line-height: 21px;
          color: #999;
          margin-left: 4px;
        }
      }

      .left-area-related {
        margin-top: 29px;
        display: flex;
        align-items: center;

        .follow-btn {
          margin-left: 0;

          .btn {
            color: #06f;
          }
        }

        .follow-count {
          font-size: 14px;
          margin-left: 16px;
          color: #999;
        }
      }
    }

    .item-right-area {
      overflow: hidden;
      flex: 1;
      margin-left: 20px;
      padding-left: 20px;
      height: 131px;
      border-left: 1px solid #ebebeb;

      .right-area-title {
        display: flex;
        height: 21px;
        line-height: 21px;
        font-size: 15px;
      }

      .right-area-excerpt {
        margin-top: 4px;
        max-height: 42px;
        line-height: 21px;
        color: #444;
      }

      .right-area-tags {
        display: flex;
        align-items: center;
        margin-top: 8px;

        .type-tag {
          color: #999;
          background-color: #f6f6f6;
          height: 20px;
          line-height: 20px;
          flex-shrink: 0;
          font-size: 12px;
          margin-right: 8px;
          border-radius: 2px;
          padding: 0 4px;
        }

        .count-tag {
          margin-top: 0;

          :last-child::before {
            content: '·';
            margin: 0 3px;
          }
        }
      }

      .right-area-entry {
        position: relative;
        font-weight: 500;
        display: flex;
        align-items: center;
        height: 24px;
        font-size: 14px;
        color: #8590a6;
        margin-top: 15px;

        ::after {
          content: '';
          border: solid #8590a6;
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 3px;
          margin-left: 10px;
          transform: rotate(-45deg);
        }
      }
    }
  }
`;

export const JAWrapper = styled.a`
  font-weight: 600;
`;
