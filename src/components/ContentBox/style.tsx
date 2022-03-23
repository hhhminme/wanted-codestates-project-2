import styled from "styled-components";

interface Props {
  videoUrl: string;
}

export const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 330px;
  box-sizing: border-box;
  flex: 1;
  margin-right: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 5px -5px rgb(0 0 0 / 21%);
  :last-child {
    margin: 0;
  }

  .box-title__wrap {
    margin: 15px 20px 0px 20px;
    padding-bottom: 15px;
    font-size: 14px;
    font-weight: 600;
    color: #07f;
    border-bottom: 1px solid #07f;
  }
`;

export const BoxContent = styled.div`
  flex: 1;
  background-image: url("img/background_flag_rank.png");
  background-size: cover;
  background-position: 50%;
`;

export const NewsContent = styled.div`
  margin: 0px 20px;
  color: #1f334a;

  th,
  td {
    cursor: pointer;
  }

  .news-header {
    background-color: #fbfbfb;
  }
  .news-title {
    padding: 10px 0px;
    width: 90%;
  }
  .news-date {
    width: 10%;
  }

  .news-title__content {
    padding: 10px 5px;
  }

  .news-title__img {
    width: 12px;
  }
`;

export const VideoContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 30px;
  box-sizing: border-box;
  .video-card {
    border: 1px solid ridge;
    @media (max-width: 1630px) {
      :last-child {
        display: none;
      }
    }
  }

  .video-img__wrap {
    height: 85px;
    @media (max-width: 1630px) {
      height: 100px;
      width: 205px;
    }
    overflow: hidden;
    margin-bottom: 20px;
  }

  P {
    font-size: 12px;
    line-height: 14px;
    overflow: hidden;
    font-weight: 600;
    margin-bottom: 10px;

    :last-child {
      color: #a1a1a1;
      font-weight: 400;
    }
  }
`;

export const VideoImg = styled.div<Props>`
  background-image: url(${(props) => props.videoUrl});
  height: 100%;
  background-size: cover;
  background-position: 50%;

  :hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`;
