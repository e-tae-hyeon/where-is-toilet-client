import React from "react";
import styled from "styled-components";
import Header from "./Header";
import HeadInfo from "./HeadInfo";

const LayoutBlock = styled.div`
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <HeadInfo />
      <LayoutBlock>
        <Header />
        {children}
      </LayoutBlock>
    </>
  );
};

export default Layout;
