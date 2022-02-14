import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
// import logo from "";

const HeaderComponent = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo src="img2.png" width={150} height={70} />

          <Navigation>
            <Link href="/">
              <Nav>Home</Nav>
            </Link>

            <Link href="/create">
              <Nav>Create</Nav>
            </Link>

            {/* <Nav>Create</Nav> */}
          </Navigation>
        </Wrapper>
      </Container>
    </div>
  );
};

export default HeaderComponent;

const Nav = styled.a`
  margin: 0 10px;
  padding: 15px 35px;
  transition: all 350ms;
  transform: scale(1);
  border-radius: 3px;
  :hover {
    transform: scale(0.97);
    cursor: pointer;
    background: rgba(255, 255, 255, 0.6);
  }
`;

const Navigation = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 150px;
  height: 60px;
  object-fit: cover;
  margin: 0 20px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #004080;
  color: white;
  font-family: Raleway;
`;
