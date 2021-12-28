import styled from "styled-components";

export const JUserTipWrapper = styled.div`
  color: #8590a6;
  font-size: 15px;
  max-width: 654px;
  display: flex;

  .author-avatar {
    img {
      width: 24px;
      height: 24px;
      background-color: #fff;
      border-radius: 2px;
    }
  }

  .author-content {
   display: flex;
   align-items: center;
   margin-left: 10px;

   .title {
    font-size: 15px;
    flex: 1;
    line-height: 1.1;
    color: #444;
    font-weight: 600;
   }

   .detail {
    color: #646464;
    word-break: break-word;
    line-height: 1.6;
    font-size: 14px;

    ::before {
     content: '，';
    }
   }
  }
`;
