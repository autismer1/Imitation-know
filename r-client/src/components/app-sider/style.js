import styled from "styled-components";

export const JAppSider = styled.div``;

export const SiderTop = styled.div`
  padding: 0 17px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .creator {
    height: 52px;
    margin: 0 16px;
    width: 100%;
    display: flex;
    align-items: center;

    .icon {
      color: #444;
      margin-left: 3px;
      font-size: 16px;
    }

    .text {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      flex-grow: 1;
      margin-left: 6px;

      .level {
        box-sizing: border-box;
        margin-left: 8px;
        color: rgb(0, 102, 255);
      }
    }

    .draft {
      color: rgb(133, 144, 166);
      font-size: 12px;
      cursor: pointer;
    }
  }

  .creator-center {
    width: 100%;
    margin-bottom: 18px;
    justify-content: center;
    align-items: center;
    display: flex;
    border: 1px solid rgba(0, 102, 255, 0.5);
    color: rgb(0, 102, 255);
    border-radius: 4px;
    cursor: pointer;
    height: 40px;
    font-size: 14px;

    span {
      position: relative;
      padding-right: 10px;

      &::before {
        position: absolute;
        content: "";
        right: 0;
        top: 30%;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        border-top: 1px solid rgb(0, 102, 255);
        border-right: 1px solid rgb(0, 102, 255);
        transform: rotate(45deg);
      }
    }
  }
`;

export const SiderNavWrapper = styled.div`
  padding: 8px 0 20px;

  .nav-item {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 50px;
    margin-right: 20px;

    :last-child {
      margin-right: 0;
    }

    .iconBg {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;

      .icon {
        font-size: 22px;
      }
    }

    .text {
      background-color: #c6d9ff;
      color: #06f;
    }

    .shipin {
      background-color: #ffe1b7;
      color: #ff9607;
    }

    .bianji {
      background-color: rgb(255, 246, 205);
      color: rgb(221, 183, 11);
    }

    .-Idea {
      background-color: #cbffff;
      color: #26bfbf;
    }

    .item-title {
      font-size: 12px;
      color: #444;
    }
  }
`;

export const SiderCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 98px;
  margin-bottom: 16px;
  border-radius: 4px;
  overflow: hidden;

  .carousel-item {
    background: rgba(133, 144, 166, 0.05);
    border-radius: 4px;
    height: 98px;
    display: flex;
    align-items: center;

    .item-child {
      display: flex;
      flex: 1 0;
      flex-direction: column;
      border-right: 1px solid hsla(0, 0%, 92.2%, 0.6);

      :last-child {
        border-right: 0;
      }

      .child-title {
        font-size: 12px;
        line-height: 22px;
        color: #8590a6;
        text-align: center;
      }

      .child-count {
        font-size: 18px;
        line-height: 28px;
        font-weight: 600;
        color: #444;
        text-align: center;
      }

      .child-data {
        box-sizing: border-box;
        margin: 0px;
        min-width: 0px;
        display: flex;
        font-size: 12px;
        align-items: center;
        justify-content: center;

        .data-title {
          color: rgb(99, 133, 166);
        }

        .data-count {
          margin-left: 4px;
          font-weight: 600;
        }
      }
    }
  }
`;

export const SiderCenter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  .top-banner {
    height: 100px;

    .sider-banner {
      object-fit: cover;
    }
  }

  .categoryList {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 -5px;
    padding: 0 10px;

    .category-item {
      width: 33%;
      margin-bottom: 25px;
      cursor: pointer;

      .itemBtn {
        display: flex;
        flex: 1 1;
        flex-direction: column;
        align-items: center;
        position: relative;

        .icon {
          font-size: 24px;
          width: 25px;
          height: 25px;
          margin-bottom: 10px;
        }

        &.lightning {
          color: rgb(255, 207, 0);
        }

        &.book {
          color: rgb(67, 212, 128);
        }

        &.hua {
          color: rgb(0, 102, 255);
        }

        &.bianji1 {
          color: rgb(15, 136, 235);
        }

        &.zixun1 {
          color: rgb(84, 120, 240);
        }

        &.i8homem- {
          color: rgb(88, 104, 209);
        }
      }

      .category-label {
        font-size: 15px;
        color: #8590a6;
        text-align: center;

        &.lightning:hover {
          color: rgb(255, 207, 0);
        }

        &.book:hover {
          color: rgb(67, 212, 128);
        }

        &.hua:hover {
          color: rgb(0, 102, 255);
        }

        &.bianji1:hover {
          color: rgb(15, 136, 235);
        }

        &.zixun1:hover {
          color: rgb(84, 120, 240);
        }

        &.i8homem-:hover {
          color: rgb(88, 104, 209);
        }
      }
    }
  }
`;

export const SiderBottom = styled.div`

  .optionList {
    padding: 8px 0;
    .option-item {
      background-color: transparent;
      border: none;
      border-radius: 0;
      display: flex;
      align-items: center;
      padding: 0 20px;
      height: 40px;
      overflow: hidden;
      color: #8590a6;
      cursor: pointer;

      &:hover {
        background-color: #f6f6f6;
      }

      .item-text {
        flex: 1 1;
        margin: 0 10px;
        text-align: left;
      }
    }
  }
`;
