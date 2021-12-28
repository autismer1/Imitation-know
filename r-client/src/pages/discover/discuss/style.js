import styled from "styled-components";

export const JDiscussWrapper = styled.div``;

export const JContent = styled.div`
 padding: 0 0 20px 0;
 background-color: #fff;
 border-radius: 2px;
 margin: 10px auto;

 .discuss-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px 0 rgb(0 34 77 / 5%);
  padding: 20px;
  border-radius: 2px;

  .header-title {
   font-weight: 600;
   line-height: 20px;
  }

  .header-action {
   color: #06f;
   font-size: 14px;
   font-weight: 600;
   line-height: 20px;
  }
 }

 .discuss-content {
  padding: 0 20px;
 }
`;

export const JAWrapper = styled.a`
 color: #175109;
 width: 200px;
 height: 224px;
 position: relative;
 display: inline-block;
 margin-top: 20px;
 margin-right: 40px;

 &.right {
  margin-right: 0;
 }

 img {
  width: 100%;
  height: 200px;
  border-radius: 6px;
  object-fit: cover;
 }

 .mask {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 0;
  top: 0;
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
  background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.5));
 }

 .title {
  color: #fff;
  position: absolute;
  bottom: 34px;
  left: 10px;
 }

 .count {
  font-size: 14px;
  color: #8590a6;
  margin-top: 10px;
  line-height: 1;
 }
`;
