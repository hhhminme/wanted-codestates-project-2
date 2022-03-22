import React, { useEffect, useState } from "react";
import * as S from "./style";
const MainSearch = () => {
  const searchSelctAddr = [
    {
      name: "유저",
      searchValue: "카트라이더 닉네임을 입력",
    },
    {
      name: "카트",
      searchValue: "카트바디 이름을 입력",
    },
    {
      name: "트랙",
      searchValue: "트랙이름을 입력",
    },
  ];
  const [searchValue, setSearchValue] = useState("카트라이더 닉네임을 입력");
  const handleOptionClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    searchSelctAddr.map(({ name, searchValue }) => {
      name === e.target.value && setSearchValue(searchValue);
    });
  };

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <S.SearchWrap>
      <S.Select onChange={handleOptionClick} id="select">
        {searchSelctAddr.map((val, idx) => (
          <option value={val.name} key={idx}>
            {val.name}
          </option>
        ))}
      </S.Select>
      <S.SelectIcon />
      <input className="search-input" placeholder={searchValue} />
      <button className="search-btn">
        <img src="img/tmi_logo_default.svg" alt="카트라이더 tmi 검색 버튼" />
      </button>
    </S.SearchWrap>
  );
};

export default MainSearch;
