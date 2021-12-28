import styled from "styled-components";
import column_top_bg from "@/assets/images/column-top-bg.png";
import column_repeat from "@/assets/images/column-repeat.png";
import column_title from "@/assets/images/column-title.png";

export const JColumnlWrapper = styled.div`
  padding-bottom: 46px;

  .column-btn {
    cursor: pointer;
    display: inline-block;
    padding: 0 16px;
    font-size: 14px;
    text-align: center;
    border: 1px solid;
    border-radius: 3px;
  }
`;

export const JColumnHeader = styled.div`
  height: 52px;

  .header-content {
    display: flex;
    align-items: center;
    width: 1000px;
    margin: 0 auto;
    padding: 0 16px;

    a {
      width: 71px;
      height: 50px;
    }

    .content-btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .btn-more {
        height: 32px;
        padding: 0 20px;
        color: #8590a6;
        cursor: pointer;

        .icon {
          font-size: 24px;
        }
      }

      .btn-write {
        color: #06f;
        line-height: 32px;
        border-color: #06f;

        .icon {
          font-size: 18px;
          font-weight: 600;
          margin-right: 4px;
          margin-left: -3px;
        }
      }
    }
  }

  .header-profile {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(510px, -50%);

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const JColumnTopContent = styled.div`
  height: 470px;
  background: url(${column_top_bg}) 50% no-repeat;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: url(${column_repeat}) repeat-x;
    background-size: 20px 600px;
  }

  .column-top-title {
    background: url(${column_title}) 50% no-repeat;
    background-size: 129px 179px;
    height: 0;
    left: 50%;
    margin: 0 0 0 -65px;
    overflow: hidden;
    padding-top: 179px;
    position: absolute;
    top: 152px;
    width: 129px;
  }

  .column-top-subTitle {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0.5em;
    line-height: 24px;
    margin: 0;
    position: absolute;
    text-align: center;
    top: 350px;
    width: 100%;
    color: #121212;
  }

  .column-top-write-btn {
    height: 38px;
    left: 50%;
    margin-left: -51px;
    position: absolute;
    top: 413px;
    width: 120px;
    line-height: 36px;
    border-color: #121212;
  }

  .column-top-request-btn {
    font-size: 14px;
    left: 50%;
    line-height: 12px;
    margin-left: -36px;
    position: absolute;
    top: 466px;
    color: #11a668;

    ::after {
      position: absolute;
      top: 36%;
      right: -10px;
      content: "";
      border: solid #8590a6;
      border-width: 0 1px 1px 0;
      border-color: #11a668;
      display: inline-block;
      padding: 2px;
      transform: rotate(-45deg);
    }
  }
`;

export const JColumnCenterContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 48px auto 0;
  width: 888px;

  .column-center-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 3px 32px;
    width: 100%;

    .title-text {
      color: #121212;
      font-size: 14px;
      line-height: 22px;
      margin: 0 16px;
      font-weight: 600;
    }

    .title-line {
      height: 1;
      display: none;

      flex-flow: 1;
      background: #d3d3d3;
    }
  }

  .column-center-container {
    display: flex;
    flex-wrap: wrap;

    .card {
      margin: 0 8px 16px;
      border-radius: 4 px;
      box-shadow: 0 8px 18px rgb(0 0 0 / 6%);
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      padding: 26px 0 23px;
      width: 206px;

      img {
        border-radius: 50%;
        width: 48px;
        height: 48px;
        aspect-ratio: auto 48 / 48;
        background: #fff;
      }

      .info {
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-grow: 1;
        padding: 0 16px;

        .info-title {
          margin-top: 16px;
          font-weight: 600;
        }

        .info-description {
          font-size: 14px;
          line-height: 21px;
          margin-top: 7px;
          text-align: center;
          word-break: break-all;
          color: gray;
        }
      }

      .meta {
        font-size: 14px;
        margin-top: 14px;
        color: gray;
      }

      .entry-btn {
        margin-top: 15px;
        color: #11a668;
        line-height: 32px;
        border-color: #11a668;
      }
    }
  }

  .refresh-btn {
    color: #444;
    line-height: 32px;
    border-color: #444;
    margin-top: 20px;
    width: 98px;

    .anticon {
      margin-right: 6px;
    }
  }
`;

export const JColumnBottomContent = styled.div`
  margin-top: 48px;
  align-items: center;
  background: url(${column_repeat}) repeat-x;
  background-size: 20px 600px;
  display: flex;
  flex-direction: column;
  padding-top: 134px;

  .column-bottom-title {
    border: solid #97ffd8;
    border-width: 1px 0;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 14px;
    padding: 26px 0;
    text-align: center;
    white-space: nowrap;
    width: 345px;
  }

  .column-bottom-btn {
    line-height: 36px;
    margin-top: 40px;
    height: 38px;
    width: 120px;
    color: #444;
    border-color: #444;
  }

  .column-bottom-footer {
    color: grey;
    font-size: 12px;
    line-height: 22px;
    margin: 80px 0 60px;
    padding: 0 12px;
    text-align: center;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;
