import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-width: 1000px;
  background-color: #fafafa;
`;

export const MainSection = styled.section`
  position: relative;
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
  top: 0;
  width: 100%;
  z-index: 100;
  overflow: hidden;
  background-size: cover;
  background-position: 50%;
  background-image: url("img/main_bg1.png");
`;

export const ContentMain = styled.div`
  position: relative;
  width: 1600px;
  @media (max-width: 1630px) {
    width: 1500px;
  }
  height: 550px;
  margin: 0 auto;
  text-align: center;
  padding-top: 200px;
  padding-bottom: 200px;
  overflow: hidden;
  z-index: 150;
  .content-title {
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
    z-index: 150;
    top: 200px;
    left: 80px;
    width: 380px;
  }

  .content-left__bg {
    position: absolute;
    z-index: 150;
    left: 0;
    top: 200px;
  }

  .content-right__img {
    position: absolute;
    top: 200px;
    z-index: 150;
    right: 80px;
    width: 380px;
  }
  .content-right__bg {
    position: absolute;
    right: 0;
    z-index: 150;
    top: 200px;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  position: absolute;
  box-sizing: border-box;
  top: 620px;
  padding: 10px;
  left: 50%;
  z-index: 200;
  transform: translate(-50%, 0%);
  width: 1300px;
  @media (max-width: 1630px) {
    width: 1000px;
  }
`;

export const Footer = styled.footer`
  background-color: #fafafa;
  width: 1300px;
  @media (max-width: 1630px) {
    width: 1000px;
  }
  margin: 0 auto;
`;
