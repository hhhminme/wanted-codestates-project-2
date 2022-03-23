import React from "react";

import * as S from "./style";
import { footerInfo } from "../../utils/MockData";

const Footer = () => {
  return (
    <S.FooterWrap>
      <div className="footer-logo">
        <img
          className="footer-logo__img"
          src="img/lab_logo.svg"
          alt="INTELLIGENCE LABS 로고"
        ></img>
        <span className="footer-logo__name">
          Data based on NEXON DEVELOPERS
        </span>
      </div>
      <div className="footer-info">
        <ul>
          {footerInfo.map(({ info, infoUrl }) => (
            <li>
              <a href={infoUrl} target="_blank" rel="noreferrer">
                {info}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </S.FooterWrap>
  );
};

export default Footer;
