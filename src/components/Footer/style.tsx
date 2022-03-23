import styled from "styled-components";

export const FooterWrap = styled.footer`
  background-color: #fafafa;
  width: 1300px;
  color: #a1a1a1;
  @media (max-width: 1630px) {
    width: 1000px;
  }
  margin: 0 auto;

  .footer-logo {
    .footer-logo__img {
      vertical-align: middle;
      margin-right: 10px;
      width: 140px;
      opacity: 0.3;
    }
    .footer-logo__name {
      display: inline-block;
      width: 250px;
      padding-left: 10px;
      border-left: 1px solid #ccc;
    }
  }

  .footer-info {
    li {
      float: left;
      margin-top: 10px;
      padding-right: 10px;
      margin-right: 10px;
      font-weight: 400;
    }
    a {
      text-decoration: none;
      color: #a1a1a1;
    }
  }
`;
