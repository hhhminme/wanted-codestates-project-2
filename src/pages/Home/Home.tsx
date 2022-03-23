import React from "react";

import * as S from "./style";
import Header from "../../components/Header";
import MainSearch from "../../components/MainSearch";
import ContentBox from "../../components/ContentBox";
const Home = () => {
  return (
    <S.Wrap>
      <Header />
      <S.MainSection>
        <S.ContentMainWrap />
        <S.ContentMain>
          <img
            className="content-left__img"
            src="/img/covid_left.png"
            alt="마스크를 쓰고 핸드폰을 하는 배찌"
          />
          <img
            className="content-left__bg"
            src="/img/main_left_bg.png"
            alt="마스크를 쓰고 있는 다오"
          />
          <img
            className="content-right__img"
            src="/img/covid_right.png"
            alt="마스크를 쓰고 핸드폰을 하는 배찌"
          />
          <img
            className="content-right__bg"
            src="/img/main_right_bg.png"
            alt="마스크를 쓰고 있는 다오"
          />
          <div className="content-title">
            <p className="content-title__openapi">
              <a
                href="https://developers.nexon.com/"
                target="_blank"
                rel="noreferrer"
              >
                넥슨 오픈API 기반
              </a>
            </p>
            <p className="content-title__search">
              카트라이더 <span>전적</span> 검색
            </p>
            <div className="content-title__box">
              <p>사회적거리두기</p>
            </div>
          </div>
          <MainSearch />
        </S.ContentMain>
      </S.MainSection>
      <S.HomeContent>
        <ContentBox title={"TMI 업데이트 로그"} type={"news"}></ContentBox>
        <ContentBox title={"카트라이더 TMI 영상"} type={"video"}></ContentBox>
      </S.HomeContent>
      <div>footer</div>
    </S.Wrap>
  );
};

export default Home;
