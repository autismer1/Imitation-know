import styled from "styled-components";

export const JHotItemWrapper = styled.div`
  display: flex;
  padding: 16px 16px 16px 0;
  position: relative;
  background-color: #fff;
`;

export const ItemIndex = styled.div`
  width: 57px;
  text-align: center;

  .rank {
    font-weight: 600;
    line-height: 1.6;
    font-size: 18px;
    color: #999;
  }

  .hot {
    color: #ff9607;
  }
`;

export const ItemContent = styled.div`
  flex: 1;
  overflow: hidden;

  .title {
    font-size: 18px;
    line-height: 28px;
    max-height: 56px;
    font-weight: 600;
    color: #121212;
  }

  .excerp {
    line-height: 25px;
    margin-top: 2px;
    font-size: 15px;
    min-height: 25px;
  }

  .content-metrics {
    display: flex;
    align-items: center;
    color: #8590a6;
    font-size: 14px;
    height: 16px;
    margin-top: 8px;

    .icon-redu {
      color: rgb(159, 173, 199);
      font-size: 22px;
    }

    .action {
      margin-left: 28px;

      .shareMenu {
        display: inline-block;
        cursor: pointer;
        text-align: center;
        background: none;
        font-size: 14px;

        .icon {
          font-size: 14px;
          margin-right: 6px;
          color: rgb(159, 173, 199);
        }
      }
    }
  }

  .metrics-bottom {
    position: absolute;
    bottom: 16px;
  }
`;

export const ItemImg = styled.a`
  display: block;
  height: 105px;
  margin-left: 16px;
  position: relative;

  img {
    display: block;
    object-fit: cover;
    height: 105px;
    width: 190px;
    border-radius: 4px;
  }
`;
