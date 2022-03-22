import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import styled, { keyframes } from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #fff;
  overflow-y: hidden;
`;
export const HeaderUtilWrap = styled.div`
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

export const DownMenu = styled.div`
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

export const OpenBtn = styled(BsFillCaretDownFill)`
  font-size: 12px;
  color: #ccc;
`;
export const CloseBtn = styled(BsFillCaretUpFill)`
  font-size: 12px;
  color: #ccc;
`;

// header section

export const HeaderSection = styled.div`
  background-color: #005fcc;
  overflow-y: hidden;
`;

export const SectionInner = styled.div`
  display: flex;
  width: 1300px;
  margin: 0 auto;

  @media (max-width: 1630px) {
    width: 1000px;
  }
  .inner_tap {
    display: inline-block;

    ul {
      display: flex;
      height: 55px;
      line-height: 55px;
      li {
        width: 140px;
        text-align: center;
        a {
          display: block;
          width: 100px;
          color: #fff;
          opacity: 0.5;
          text-decoration: none;
        }
        a:hover {
          opacity: 1;
          border-bottom: 4px solid #fff;
          height: 55px;
          overflow-y: hidden;
          box-sizing: border-box;
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }
`;
