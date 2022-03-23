import React from "react";
import * as S from "./style";
import { newsData, videoData } from "./MockData";

interface Props {
  title: string;
  type: string;
}
const ContentBox = ({ title, type }: Props) => {
  return (
    <S.BoxWrap>
      <h5 className="box-title__wrap">
        <span className="box-title__content">{title}</span>
      </h5>
      <S.BoxContent>
        {type === "news" ? (
          <S.NewsContent>
            <table>
              <thead className="news-header">
                <th className="news-title">내용</th>
                <th className="news-date">날짜</th>
              </thead>
              <tbody>
                {newsData.map((val, idx) => (
                  <tr>
                    <td className="news-title__content">
                      {val.title}
                      {idx === 0 && (
                        <img
                          className="news-title__img"
                          src="img/icon_new_s.png"
                          alt="New 마크"
                        />
                      )}
                    </td>
                    <td>{val.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </S.NewsContent>
        ) : (
          <div>비디오</div>
        )}
      </S.BoxContent>
    </S.BoxWrap>
  );
};

export default ContentBox;
