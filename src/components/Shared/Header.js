import OpenColor from "open-color";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const HeaderBlock = styled.header`
  position: absolute;
  z-index: 15;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0.5rem;
  background: ${OpenColor.indigo[3]};
  color: #fff;
  border-radius: 0.5rem;

  h4 {
    color: ${OpenColor.indigo[9]};
  }
`;

const Header = () => {
  const { near } = useSelector((state) => state.map);
  return (
    <HeaderBlock>
      <h2>Where is toilet?</h2>
      <h4>화장실이 어디있지?</h4>
      <p>근처의 화장실 {near}개</p>
    </HeaderBlock>
  );
};

export default Header;
