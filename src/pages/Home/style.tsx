import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 1000px;
`;

export const MainSection = styled.section`
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
`;

export const ContentMainWrap = styled.div`
  position: absolute;
  height: 655px;
  margin-top: -55px;
  width: 100%;
  z-index: 0;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  background-image: url("img/main_bg1.png");
  text-align: center;
`;

export const ContentMain = styled.div`
  position: relative;
  width: 1600px;
  height: 100%;

  z-index: 30;
  margin: 0 auto;

  .content-title {
    padding-top: 200px;
    padding-bottom: 50px;
  }

  .content-title__openapi {
    font-size: 28px;
    line-height: 28px;
    font-weight: 400;
    color: #fff;
    overflow: hidden;
    a {
      text-decoration: none;
      color: #fff;
    }
  }

  .content-title__search {
    font-size: 40px;
    color: #fff;
    font-weight: 400;

    span {
      font-weight: 700;
    }
  }

  .content-title__box {
    margin-top: 5px;
    display: inline-block;
    width: 280px;
    line-height: 26px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 15px;

    p {
      color: #fff;
      letter-spacing: 3px;
    }
  }

  .content-left__img {
    position: absolute;
    top: 200px;
    left: 80px;
    width: 380px;
  }

  .content-left__bg {
    position: absolute;
    left: 0;
    top: 200px;
  }

  .content-right__img {
    position: absolute;
    top: 200px;
    right: 80px;
    width: 380px;
  }
  .content-right__bg {
    position: absolute;
    right: 0;
    top: 200px;
  }
`;
