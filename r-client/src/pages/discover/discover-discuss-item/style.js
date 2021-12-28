import styled from "styled-components";

export const JDiscoverDiscussItemWrapper = styled.div`
  height: 904px;
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const JAWrapper = styled.a``;

export const JItemWrapper = styled.div`
  height: 442px;
`;

export const JItemHeader = styled.div`
  height: 240px;
  position: relative;

  &.item1-wrapper {
    background-color: rgb(125, 140, 179);
    
    .follow-btn {
      color: rgb(125, 140, 179);
    }
  }

  &.item2-wrapper {
    background-color: rgb(3, 21, 95);

    .follow-btn {
      color: rgb(3, 21, 95);
    }
  }

  &.item3-wrapper {
    background-color: rgb(20, 59, 173);

    .follow-btn {
      color: rgb(20, 59, 173);
    }
  }

  &.item4-wrapper {
    background-color: rgb(63, 66, 155);

    .follow-btn {
      color: rgb(63, 66, 155);
    }
  }

  .header-bg {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 240px;

    .banner {
      background-position: center center;

      &.item1 {
        background-image: url("https://pica.zhimg.com/50/v2-bcbd7d88f1c2ec3e1be12359d4b299cb_hd.jpg?source=b1f6dc53");
      }
      &.item2 {
        background-image: url("https://pica.zhimg.com/50/v2-b2b2178cc1b2b962ee6c519e487377fa_hd.jpg?source=b1f6dc53");
      }
      &.item3 {
        background-image: url("https://pica.zhimg.com/50/v2-b3146fd6621081e5c49f63b4cf711c1f_hd.jpg?source=b1f6dc53");
      }
      &.item4 {
        background-image: url("https://pica.zhimg.com/50/v2-a15da660e0b82aaab23251150c38b5be_hd.jpg?source=b1f6dc53");
      }
    }

    .item1-mask1 {
      background: linear-gradient(to right, rgb(125, 140, 179) 0%, rgba(125, 140, 179, 0) 100%);
    }

    .item1-mask2 {
      background: linear-gradient(to right, rgba(125, 140, 179, 0.5) 0%, rgba(125, 140, 179, 0) 100%);
    }

    .item2-mask1 {
      background: linear-gradient(to right, rgb(3, 21, 95) 0%, rgba(3, 21, 95, 0) 100%);
    }

    .item2-mask2 {
      background: linear-gradient(to right, rgba(3, 21, 95, 0.5) 0%, rgba(3, 21, 95, 0) 100%);
    }

    .item3-mask1 {
      background: linear-gradient(to right, rgb(20, 59, 173) 0%, rgba(20, 59, 173, 0) 100%);
    }

    .item3-mask2 {
      background: linear-gradient(to right, rgba(20, 59, 173, 0.5) 0%, rgba(20, 59, 173, 0) 100%);
    }

    .item4-mask1 {
      background: linear-gradient(to right, rgb(63, 66, 155) 0%, rgba(63, 66, 155, 0) 100%);
    }

    .item4-mask2 {
      background: linear-gradient(to right, rgba(63, 66, 155, 0.5) 0%, rgba(63, 66, 155, 0) 100%);
    }

    div {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  .header-content {
    position: relative;
    width: 320px;
    padding: 68px 24px 24px;

    a {
      color: #fff;
    }

    .intro {
      margin-top: 12px;
      height: 60px;
      line-height: 20px;
      font-size: 14px;
    }

    .info {
      font-size: 12px;
      display: flex;
      align-items: center;
      margin-top: 19px;
      color: hsla(0, 0%, 100%, 0.6);

      div:first-child {
        display: flex;
        align-items: center;

        span {
          margin-left: 12px;
        }

        img {
          width: 28px;
          height: 28px;
          border-radius: 4px;
          margin-left: 8px;

          :first-child {
            margin-left: 0;
          }
        }
      }

      div:last-child {
        margin-left: 12px;
        padding-left: 12px;
        height: 18px;
        line-height: 18px;
        border-left: 2px solid hsla(0, 0%, 100%, 0.32);
      }
    }
  }

  .follow-btn {
    position: absolute;
    right: 24px;
    bottom: 24px;
    background-color: #fff;
  }
`;

export const JItemContent = styled.div`
  padding: 20px 24px 24px;

  .item-margin-top {
    margin-top: 16px;
  }

  .question-title {
    display: block;
    height: 21px;
    line-height: 21px;
    font-size: 15px;
  }

  .question-count {
    display: flex;
    align-items: center;
  }
`;
