import styled from "styled-components";
import { BsFillCaretDownFill } from "react-icons/bs";

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #fff;
  outline: none;
`;

export const SelectIcon = styled(BsFillCaretDownFill)`
  color: #fff;
  margin: auto 5px;
`;

export const SearchWrap = styled.div`
  display: flex;
  width: 700px;
  height: 67px;
  box-sizing: border-box;
  padding: 5px 30px;
  line-height: 67px;

  margin: auto;
  border: 4px solid #fff;
  border-radius: 33.5px;

  .search-input {
    border: none;
    background: none;
    outline: none;
    border-left: 1px solid #fff;
    padding-left: 20px;
    color: #fff;
    font-size: 24px;
    flex: 1;
  }

  .search-input::placeholder {
    color: #fff;
    opacity: 0.5;
    font-size: 24px;
    transition: all 0.15s ease-in-out;
  }

  .search-input:focus::-webkit-input-placeholder {
    color: transparent;
  }

  .search-btn {
    background: none;
    border: none;
  }
`;
