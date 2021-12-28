import styled from "styled-components";

export const JContentItemWrapper = styled.div`
`;

export const ItemTip = styled.div`
  height: 24px;
  margin-bottom: 6px;
  color: #8590a6;
  font-size: 15px;

  .sign {
    margin: 0 0.3em;
    display: inline-block;
    background: #fff;

    img {
      margin-top: -2px;
      width: 15px;
      height: 15px;
    }
  }

  .bull {
    font-weight: 600;
  }
`;

export const ItemContentBox = styled.div`
  line-height: 1.67;

  .part-content {
    max-height: 100px;
  }
`;

export const ItemPartContent = styled.div`
  margin-top: 9px;
  margin-bottom: -4px;
  overflow: hidden;
  font-size: 16px;
  cursor: pointer;

  :hover {
    color: #646464;

    .read-more {
      color: #646464;

      ::after {
        border-color: #646464;
      }
    }
  }
  
  .read-more {
    display: inline-block;
    margin-left: 4px;
    color: #175199;
    position: relative;

    ::after {
      content: '';
      position: absolute;
      top: 25%;
      right: -14px;
      border: solid #175199;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
    }
  }
`;

export const ItemActions = styled.div`

  .is-to-block {
    transition: transform 0.2s ease-out;
  }

  .is--active {
    position: fixed;
    left: 16px;
    bottom: 0;
    box-shadow: 0 -1px 3px rgb(18 18 18 / 10%);
    transform: scale(1);
    width: 694px;
  }

  .is--visibility {
    position: fixed;
    bottom: 0;
    transform: scale(0);
    z-index: 10;
  }
  
`;