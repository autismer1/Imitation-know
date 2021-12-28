import styled from "styled-components";

export const JArticleActionWrapper = styled.div`
  
  .action-warpper {
    position: relative;
    clear: both;
    background: #fff;
    padding: 10px 20px;
    margin: 0 -20px -10px;
    color: #646464;

    &.reset-m {
      margin: 0;
    }
  }

  .vote-box {
    
    .vote-btn {
      color: #06f;
      line-height: 30px;
      padding: 0 12px;
      font-size: 14px;
      background: rgba(0,102,255,.1);
      border: 1px solid rgba(0,102,255,.1);
      border-radius: 3px;
      cursor: pointer;
      display: inline-block;

      .icon {
        display: inline-flex;
        align-items: center;
        font-size: 14px;
        margin-right: 6px;
      }

      :first-child {
        margin-right: 4px;
      }

      :last-child {
        .icon {
          margin-right: 0;
        }
      }

      :hover {
        background: rgba(0,102,255,.15);
      }
    }
  }

  .action-btn {
    margin-left: 24px;
    font-size: 14px;
    color: #8590a6;
    line-height: inherit;
    display: inline-block;
    cursor: pointer;

    .icon {
      font-size: 16px;
      margin-right: 6px;

      &.icon-zhifeiji {
        font-size: 13px;
      }
    }
  }

  .hide {
    position: absolute;
    top: 56%;
    right: 30px;
    padding-right: 14px;
    z-index: 10;
    transform: translateY(-50%);
    display: none;

    &.active {
      display: block;
    }

    ::after {
      content: '';
      position: absolute;
      top: 38%;
      right: 0;
      border: solid #8590a6;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(-135deg);
    }
  }
`;
