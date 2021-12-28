import styled from "styled-components";

export const JDiscoverSpecialItemWrapper = styled.div`
  margin-bottom: 20px;
  height: 450px;

  .banner {
    display: block;
    height: 200px;

    img {
      object-fit: cover;
    }
  }

  .header {
    height: 110px;
    margin: 0 24px;
    padding: 30px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ebebeb;

    .info {
      flex: 1;
      width: 330px;

      .count {
        font-weight: 400;

        span {
          position: relative;
        }

        span:last-child::before {
          content: "·";
          margin: 0 4px;
        }
      }
    }

    .follow-btn {
      color: #06f;
    }
  }

  .special-contentlist {
    margin: 20px 24px;

    .special-content-item {
      height: 24px;
      display: flex;
      align-items: center;
      margin-top: 12px;

      :first-child {
        margin-top: 0;
      }

      .tips {
        border-radius: 5px;
        background: #f6f6f6;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        color: #8590a6;
        font-size: 12px;
        flex-shrink: 0;
      }

      .title {
        font-size: 15px;
        margin-left: 12px;
        flex: 1;
      }
    }
  }
`;

export const JAWrapper = styled.a``;

