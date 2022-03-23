import React from "react";
import * as S from "./style";
interface Props {
  title: string;
}
const ContentBox = ({ title }: Props) => {
  return (
    <S.BoxWrap>
      <h5 className="box-title__wrap">
        <span className="box-title__content">{title}</span>
      </h5>
      <S.BoxContent></S.BoxContent>
    </S.BoxWrap>
  );
};

export default ContentBox;
