import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
const Home = () => {
  return (
    <Wrap>
      <Header />
      <div>홈입니다.</div>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 1000px;
  position: relative;
  overflow-y: hidden;
`;

export default Home;
