import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
const Header = () => {
  const [showOption, setShowOption] = useState(false);
  return (
    <HeaderWrapper>
      {/* header util  */}
      <HeaderUtilWrap>
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
              <span>{showOption ? <CloseBtn /> : <OpenBtn />}</span>
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
          <DownMenu>
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
                      <img src="img/header_list_logo.png"></img>
                    </span>
                    <span>카트라이더</span>
                  </Link>
                </div>
              </li>
            </ul>
          </DownMenu>
        )}
      </HeaderUtilWrap>
      {/* header saction */}
      <div></div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background-color: #fff;
  overflow-y: hidden;
`;
const HeaderUtilWrap = styled.div`
  width: 1300px;
  background-color: white;
  margin: auto;
  height: 48px;
  line-height: 48px;
  overflow-y: hidden;

  @media (max-width: 1630px) {
    width: 1000px;
  }

  .util-inner {
    display: flex;
  }

  .util-inner__logoWrap :hover {
    background-color: #f2f2f2;
    box-sizing: border-box;
  }

  .util-inner__img {
    padding: 0px 10px 0px 10px;
  }

  .util-inner__logoWrap,
  .util-inner__tmiWrap,
  .util-inner__kartLink {
    flex: none;
  }
  .util-inner__kartLink {
    margin-left: auto;

    a {
      font-size: 12px;
      color: #6c7a89;
      text-decoration: none;
    }
  }
`;

const DownMenu = styled.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  padding: 12px;
  z-index: 25;

  h3 {
    line-height: 30px;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 10px;
    color: #07f;
    border-bottom: 1px solid #f2f2f2;
    padding-left: 10px;
    padding-right: 10px;

    a {
      text-decoration: none;
      color: #07f;

      img {
        vertical-align: middle;
      }

      span {
        margin-left: 3px;
      }
    }
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 5px;
      padding: 2px 10px 2px 10px;

      div {
        line-height: 22px;

        .downmenu-link__kart {
          padding: 0;
          margin: 0;
          font-size: 100%;
          vertical-align: baseline;
          background: transparent;
          text-decoration: none;
          color: black;
        }

        img {
          border-radius: 8px;
          margin-right: 5px;
          vertical-align: middle;
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

const OpenBtn = styled(BsFillCaretDownFill)`
  font-size: 12px;
  color: #ccc;
`;
const CloseBtn = styled(BsFillCaretUpFill)`
  font-size: 12px;
  color: #ccc;
`;
export default Header;
