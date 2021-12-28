import styled from "styled-components";

export const JDiscoverCollectItemWrapper = styled.div`
  height: 364px;
`;

export const JAWrapper = styled.a``;

export const ItemHeaderWrapper = styled.div`
  overflow: hidden;
  display: flex;
  margin: 0 24px;
  padding: 24px 0 20px;
  height: 112px;
  border-bottom: 1px solid #ebebeb;

  .info {
    flex: 1;
    overflow: hidden;

    .relatedMember {
      display: flex;
      align-items: center;
      margin-top: 12px;

      .creator {
        height: 28px;
        line-height: 27px;
        display: flex;
        align-items: center;

        img {
          width: 28px;
          height: 28px;
          border-radius: 2px;
        }

        .name {
          font-weight: 500;
          color: #444;
          margin-left: 8px;
        }

        .suffix {
          margin-left: 4px;
          font-size: 14px;
          color: #999;
          font-weight: 400;
        }
      }

      .followers {
        border-left: 2px solid #ebebeb;
        margin-left: 12px;
        padding-left: 12px;
        height: 19px;
        line-height: 19px;
        font-size: 14px;
        color: #999;
      }
    }
  }

  .follow-btn {
    color: #06f;
  }
`;
export const ItemContentWrapper = styled.div`
  margin: 20px 24px;
  height: 164px;

  .content-item {

    .content-height {
      height: 21px;
      line-height: 21px;
    }

    .content--title {
      font-size: 15px;
      color: #121212;
      display: block;
      font-weight: 600;
    }

    .content-item-excerpt {
      margin-top: 4px;
      color: #444;
    }

    .content-item-tags {
      display: flex;
      align-items: center;
      margin-top: 6px;

      .tag-answer {
        background-color: #f6f6f6;
        height: 20px;
        line-height: 20px;
        padding: 0 4px;
        text-align: center;
        margin-right: 8px;
      }

      .tag-content-count {

        :last-child::before {
          content: '·';
          margin: 0 3px;
        }
      }
    }
  }
`;
export const ItemBottomWrapper = styled.a`
  display: flex;
  align-items: center;
  margin: 20px 24px 0;
  height: 24px;
  font-size: 14px;
  font-weight: 600;
  color: #8590a6;
  position: relative;

  ::after {
    content: "";
    margin-left: 20px;
    border: solid #8590a6;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
  }
`;
