import styled from "styled-components";

export const BorderWrapper = styled.div`
  /* width: 50px;
  height: 50px;
  border: 50px solid;
  border-color: #96ceb4 #ffeead #d9534f #ffad60; */

  width: 0;
    height: 0;
    border-style:solid;
    border-top-width: 0;
    border-left-width: 50px;
    border-right-width: 50px;
    border-bottom-width: 50px;
    /* border-width: 0 50px 50px; */
    border-color: transparent transparent #d9534f;
`;