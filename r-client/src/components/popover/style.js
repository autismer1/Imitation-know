import styled from "styled-components";

export const JPopoverWrapper = styled.div`
`;

export const HoverCardTitle = styled.div`
  margin-top: 20px;
  padding: 8px 0;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;

  .avatar {
    position: absolute;
    top: -20px;
    border: 2px solid #fff;
    border-radius: 4px;
    width: 68px;
    height: 68px;
    background-color: #fff;
  }

  .titleText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 84px;
    padding-bottom: 2px;
    min-height: 42px;
    overflow: hidden;
    font-size: 14px;

    .title {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 16px;

      img {
        width: 15px;
        height: 15px;
        margin-left: 6px;
        cursor: pointer;
      }
    }

    .subTitle {
      margin-top: 4px;
      color: #121212;
      font-weight: 400;
      word-break: break-word;
      line-height: 1.6;
    }
  }
`;

export const HoverCardItem = styled.div`
  padding: 8px 0;
  line-height: 1.75;
  color: #121212;
  border-bottom: 1px solid #f6f6f6;

  :last-child {
    padding: 8px 16px;
    border: 0;
    text-align: center;
  }

  .author-ident {
    display: flex;
    align-items: center;

    img {
      width: 15px;
      height: 15px;
      margin-right: 6px;
    }
  }

  .number-board {
   display: flex;

   .board-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 1.6;
    font-size: 14px;
    color: #121212;

    strong {
     font-size: 18px;
     font-weight: 600;
    }

    :hover {
     color: #175199;
    }
   }
  }

  .operate {
   margin-top: 16px;
   display: flex;
   align-items: center;

   .btn {
    min-height: 34px;
    line-height: 34px;
    text-align: center;
    min-width: 96px;
    width: 144px;
    padding: 0 16px;
    border: 1px solid #8590a6;
    border-radius: 4px;
    color: #8590a6;
    font-size: 14px;
    cursor: pointer;

    .icon {
     margin-right: 6px;
    }

    :first-child {
     background-color: #06f;
     color: #fff;

     :hover {
      opacity: 0.9;
     }
    }

    :last-child{
     margin-left: 16px;

     :hover {
      background-color: #f6f6f6;
     }
    }
   }
  }
`;
