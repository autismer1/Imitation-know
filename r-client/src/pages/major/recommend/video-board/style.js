import styled from "styled-components";

export const JVideoBoardWapper = styled.div`
 padding: 20px;

`;

export const VideoWrapper = styled.div`
 margin: 16px 0;

 .video-item {
  position: relative;

  ::before {
   content: '';
   display: block;
   padding-top: 56.25%;
  }

  .video-player {
   position: absolute;
   top: 0;
   left: 0;
   object-fit: cover;
   width: 100%;
   height: 100%;
  }
 }
`;