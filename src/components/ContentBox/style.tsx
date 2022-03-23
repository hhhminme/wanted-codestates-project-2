import styled from "styled-components";

export const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 330px;
  box-sizing: border-box;
  flex: 1;
  margin-right: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 5px -5px rgb(0 0 0 / 21%);
  :last-child {
    margin: 0;
  }

  .box-title__wrap {
    margin: 15px 20px 0px 20px;
    padding-bottom: 15px;
    font-size: 14px;
    font-weight: 600;
    color: #07f;
    border-bottom: 1px solid #07f;
  }
`;

export const BoxContent = styled.div`
  flex: 1;
  background-image: url("img/background_flag_rank.png");
  background-size: cover;
  background-position: 50%;
`;
