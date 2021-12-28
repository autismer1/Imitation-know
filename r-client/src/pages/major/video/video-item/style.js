import styled from "styled-components";

export const JVideoItemWrapper = styled.div`
  width: 207px;
  min-height: 205px;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 10px 32px 0;
`;

export const ImgWrapper = styled.div`
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgb(246, 246, 246) 1.78%,
    rgb(236, 236, 236) 100%
  );
  position: relative;
  width: 100%;
  height: 128px;
  overflow: hidden;
  border-radius: 4px;

  :hover {
    ::after {
      opacity: 0.2;
    }
    img {
      transform: scale(1.4);
    }
  }

  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.1s ease-in-out 0s, opacity 0.1s ease-in-out 0s;
  }

  ::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: 0px;
    background-color: rgb(0, 0, 0);
    opacity: 0.03;
  }

  .desc {
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 100%;
    height: 25px;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: rgb(255, 255, 255);
    position: absolute;
    left: 0px;
    bottom: 0px;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    padding: 6px 8px 5px 6px;
    border-radius: 4px;

    .icon {
      font-size: 12px;
      font-weight: 600;
      margin-right: 4px;
    }
  }
`;

export const TitleWrapper = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: rgb(18, 18, 18);
  margin: 8px 0px 12px;
  cursor: pointer;
`;

export const AuthorWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: 12px;
  line-height: 17px;
  font-weight: 500;

  .user-box {
    display: flex;
    align-items: center;

    .user-avatar {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;

      img {
        cursor: pointer;
        border-radius: 50%;
        background: #fff;
        aspect-ratio: auto 15/15;
      }
    }

    .user-name {
      cursor: pointer;
      color: rgb(100, 100, 100);
      padding: 0px 8px 0px 6px;
      max-width: 115px;
    }
  }

  .hot-comment {
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    padding: 0px 2px;
    background: rgba(255, 131, 86, 0.12);
    color: rgb(255, 73, 12);
    border-radius: 2px;
  }

  .operation {
    margin-left: auto;
    height: 16px;

    span {
      cursor: pointer;
    }
  }
`;
