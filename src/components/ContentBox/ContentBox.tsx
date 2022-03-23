import React from "react";
import * as S from "./style";
import { newsData, videoData } from "../../utils/MockData";

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
          <S.VideoContent>
            {videoData.map((val, idx) => (
              <div className="video-card">
                <div className="video-img__wrap">
                  <S.VideoImg videoUrl={val.imgUrl}></S.VideoImg>
                </div>
                <div>
                  <p>{val.title}</p>
                  <p>{val.subTitle}</p>
                </div>
              </div>
            ))}
          </S.VideoContent>
        )}
      </S.BoxContent>
    </S.BoxWrap>
  );
};

export default ContentBox;
