import styled from "styled-components";

export const JPeopleCommentWrapper = styled.div`
  height: 100%;
  overflow-anchor: none;

  .comments {
    margin-top: 12px;
    overflow: visible;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
    border: 1px solid #ebebeb;

    .comment-item {
      border-bottom: 1px solid #f6f6f6;
      padding: 0 20px;

      .ant-comment-inner {
        border-bottom: 1px solid #f6f6f6;

        :last-child {
          border-bottom: 0;
        }
      }

      :last-child {
        border-bottom: 0;
      }
    }
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0 20px;
  height: 50px;
  border-bottom: 1px solid #f6f6f6;

  .title {
    flex: 1;

    h2 {
      color: #121212;
      font-size: 15px;
      display: inline-block;
      font-weight: 600;
    }
  }

  .options {
    color: #8590a6;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const CommentInput = styled.div`
  position: relative;

  .input-container {
    padding: 12px 20px;
    background-color: #fff;

    &.input--normal {
      position: relative;
      transition: padding-right 0.3s ease;
    }

    &.input--active {
      padding-right: 94px;
      display: flex;
    }

    .input-wrap {
      display: flex;
      align-items: center;
      width: 100%;
      position: relative;
      border: 1px solid #ebebeb;
      border-radius: 3px;

      .input_w {
        flex: 1;

        .input {
          width: 100%;
          background-color: #fff;
          padding: 6px 12px;
          font-size: 15px;
          word-break: break-word;
          cursor: text;

          ::placeholder {
           color: #8590a6;
           font-size: 15px;
          }
        }
      }

      .input-action {
        background-color: #f6f6f6;
        height: 36px;
        display: flex;
        color: #8590a6;
        align-items: center;

        .icon {
         position: relative;
         flex: 1;
         font-size: 24px;
         display: inline-flex;
         margin: 0 6px;
         height: 28px;
         line-height: 28px;
         cursor: pointer;

         :hover {
          color: #06f;
         }

         :first-child .icon{
          position: absolute;
          right: -9px;
          top: -6px;
          font-size: 14px;
          color: #ffac31;
         }
        }
      }
    }

    .release {
      position: absolute;
      right: 16px;
      bottom: 13px;
      line-height: 34px;
      transform: scale(0);
      background-color: #06f;
      border-radius: 3px;
      border: 1px solid;
      font-size: 14px;
      width: 60px;
      display: inline-block;
      text-align: center;
      color: #fff;
      transition: opacity 0.3s ease;

      &.is-active {
       transform: scale(1);
       opacity: 0.5;
      }

      &.is--value {
       opacity: 1;
      }
    }
  }
`;
