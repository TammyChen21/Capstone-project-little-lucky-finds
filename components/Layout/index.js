import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <StyledAppContainer>
      <StyledHeading>
        <h1>App Name</h1>
      </StyledHeading>

      <StyledNav>
        <Navigation />
      </StyledNav>
    </StyledAppContainer>
  );
}

const StyledAppContainer = styled.div`
  position: relative;
`;

const StyledHeading = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #6ce5d2;
  color: #004056;
  text-align: center;
  margin-top: -25px;
`;

const StyledNav = styled.ul`
  background-color: #6ce5d2;
  bottom: -20px;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  height: 70px;
  align-items: center;
  z-index: 999;
  padding: 10px;
`;
