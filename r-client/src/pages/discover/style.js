import styled from "styled-components";

export const JDiscoverWrapper = styled.div`
  .discover-container {
    margin: 32px auto 0;
    padding: 16px 0 107px;

    .discover-item {
      margin-top: 32px;
    }

    .wrap-title {
      height: 36px;
      display: flex;
      align-items: center;

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

    .wrap-content {
      padding: 24px 0 20px;

      .wrapper {
        background: #fff;
        width: 490px;
        flex-shrink: 0;
        border-radius: 4px;
        overflow: hidden;
      }

      .column {
        display: flex;
        justify-content: space-between;

        div {
          margin-left: 20px;

          :first-child {
            margin-left: 0;
          }
        }
      }

      .content {
        display: flex;
        align-content: space-between;
        justify-content: space-between;
        flex-wrap: wrap;

        &.collect {
          height: 748px;
        }
      }
    }

    .wrap-action {
      display: flex;
      justify-content: center;

      a {
        position: relative;
        cursor: pointer;
        font-weight: 600;
        border-radius: 25px;
        color: #8590a6;
        background-color: #fff;
        height: 48px;
        padding: 0 38px 0 24px;
        line-height: 48px;
        font-size: 15px;

        ::after {
          content: "";
          position: absolute;
          top: 49%;
          right: 20px;
          border: solid #8590a6;
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 3px;
          transform: rotate(-45deg) translateY(-50%);
        }
      }
    }
  }
`;

export const JSpecial = styled.div``;
export const JDiscuss = styled.div``;
export const JCollect = styled.div``;
export const JColumn = styled.div``;
