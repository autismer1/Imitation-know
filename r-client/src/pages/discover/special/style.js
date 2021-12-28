import styled from "styled-components";

export const JSpecialWrapper = styled.div``;

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

    .count {
      font-size: 15px;
      margin-left: 24px;
      color: #8590a6;
    }
  }
`;

export const JSpecialContent = styled.div`
  padding: 0;
  margin: 10px auto 0;

  .special-item {
    margin-top: 10px;
    padding: 24px;
    display: flex;
    background-color: #fff;
    border-radius: 3px;
    width: 1000px;
    height: 188px;

    :first-child {
      margin-top: 0;
    }

    .item-banner {
      width: 336px;
      height: 140px;
      flex-shrink: 0;
      border-radius: 4px;
      overflow: hidden;
    }

    .item-body {
      flex: 1;
      overflow: hidden;
      margin-left: 20px;

      .body-header {
        display: flex;

        .header-infos {
          flex: 1;
          overflow: hidden;

          .info-title {
            display: block;
            height: 28px;
            line-height: 28px;
            font-weight: 600;
            font-size: 20px;
          }

          .info-related {
            display: flex;
            align-items: center;
            margin-top: 8px;
            font-size: 12px;
            height: 17px;
            color: #999;

            span:last-child::before {
              content: "·";
              margin: 0 3px;
            }
          }
        }

        .btn {
          color: #06f;
        }
      }

      .body-intro {
        margin-top: 8px;
        color: #444;
        max-height: 42px;
        line-height: 21px;
      }

      .body-sections {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 12px;
        height: 24px;
        overflow: hidden;

        .sections-link {
          font-size: 12px;
          color: #8590a6;
          padding: 0 8px;
          height: 24px;
          line-height: 24px;
          max-width: 580px;
          flex-shrink: 0;
          background-color: #f6f6f6;
          border-radius: 5px;
          margin-left: 12px;

          :first-child {
            margin-left: 0;
          }
        }
      }
    }
  }
`;

export const JAWrapper = styled.a``;
