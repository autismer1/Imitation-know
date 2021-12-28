import styled from "styled-components";

export const JDiscoverColumnItemWrapper = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 28px 24px;
  height: 313px;
  min-width: 235px;
  border-radius: 4px;

  .avatar {
    display: block;
    width: 80px;
    height: 80px;

    img {
      border-radius: 50%;
    }
  }

  .title {
    margin-top: 20px;
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    font-weight: 600;
    max-width: 187px;
  }

  .count {
    span:last-child::before {
      content: '·';
      margin: 0 3px;
    }
  }

  .intro {
    color: #444;
    height: 40px;
    margin-top: 20px;
    line-height: 20px;
    font-size: 14px;
  }

  .btn {
    color: #06f;
    margin-top: 20px;
  }
`;

export const JAWrapper = styled.a``;
