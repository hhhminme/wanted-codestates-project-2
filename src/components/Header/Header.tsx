import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { set } from "../../redux/tabSlice";
import * as S from "./style";

const Header = () => {
  const tabAddress = [
    {
      name: "홈",
      addr: "/",
    },
    {
      name: "랭킹",
      addr: "/rank",
    },
    {
      name: "카트",
      addr: "/body",
    },
    {
      name: "트랙",
      addr: "/track",
    },
  ];
  const [showOption, setShowOption] = useState(false);
  const tabCount = useAppSelector((state) => state.tabCounter.value);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    tabAddress.map((value, index) => {
      if (value.addr === location.pathname) {
        dispatch(set(index));
      }
    });

    if (tabCount === 1) {
      setInputValue("랭커 검색");
    } else {
      setInputValue("닉네임 검색");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabCount, location]);

  return (
    <S.HeaderWrapper>
      {/* header util  */}
      <S.HeaderUtilWrap>
        <div className="util-inner">
          <li
            className="util-inner__logoWrap"
            onClick={() => setShowOption(!showOption)}
          >
            <div className="util-inner__logo">
              <Link to="/">
                <img
                  alt="카트라이더 홈 로고"
                  src="img/logo_kart.png"
                  className="util-inner__img"
                />
              </Link>
              <span>{showOption ? <S.CloseBtn /> : <S.OpenBtn />}</span>
            </div>
          </li>
          <li className="util-inner__tmiWrap">
            <div>
              <Link to="/">
                <img
                  alt="카트라이더 홈 로고"
                  src="img/tmi_logo_default_b.svg"
                  className="util-inner__img"
                />
              </Link>
            </div>
          </li>
          <li className="util-inner__kartLink">
            <div>
              <a
                href="https://kart.nexon.com/Main/Index.aspx"
                target="_blank"
                rel="noreferrer"
              >
                카트라이더 홈페이지 바로가기
              </a>
            </div>
          </li>
        </div>
        {showOption && (
          <S.DownMenu>
            <h3>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfB0SygT6AG-pZHwN2GD8Kry-5iCd_OmsP7ZSqBcxz_SLKpnw/viewform"
                target="_blank"
                rel="noreferrer"
              >
                <img src="img/icon_tmi.png" alt="tmi 아이콘"></img>
                <span>에서 다른 게임을 보고싶다면?</span>
              </a>
            </h3>
            <ul>
              <li>
                <div>
                  <Link to="/" className="downmenu-link__kart">
                    <span>
                      <img
                        src="img/header_list_logo.png"
                        alt="카트라이더 로고"
                      ></img>
                    </span>
                    <span>카트라이더</span>
                  </Link>
                </div>
              </li>
            </ul>
          </S.DownMenu>
        )}
      </S.HeaderUtilWrap>
      {/* header saction */}
      <S.HeaderSection>
        <S.SectionInner>
          <div className="inner-tap">
            <ul>
              {tabAddress.map((value, index) => (
                <li key={index}>
                  <Link
                    className={`${
                      tabCount === index
                        ? "inner-tap__active"
                        : "inner-tap__link"
                    }`}
                    to={value.addr}
                    onClick={() => dispatch(set(index))}
                  >
                    {value.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {tabCount !== 0 && (
            <div className="inner-search">
              <input placeholder={inputValue} type="text" />
              <S.SearchIcon />
            </div>
          )}
        </S.SectionInner>
      </S.HeaderSection>
    </S.HeaderWrapper>
  );
};

export default Header;
