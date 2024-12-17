import React, { useState } from "react";
import styled from "styled-components";
import logoSrc from "../assets/logo.svg";
import { ArrowRight } from "lucide-react";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background: #1a0d20;
  height: 84px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 72px;
  }
`;

const Logo = styled.img`
  height: 25.67px;
  width: 138px;

  @media (max-width: 768px) {
    height: 22px;
    width: 118.25px;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: #1a0d20;
    padding: 20px;
    z-index: 1000;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  &:hover {
    color: #8d49e4;
  }
`;

const SolutionsButton = styled.button`
  padding: 9px 16px;
  background: #8d49e4;
  color: #ffffff;
  border: none;
  border-radius: 24px;
  font-family: "Avenir", sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #7b3fcc;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    width: 32px;
    height: 32px;
    position: relative;
  }

  &::before,
  &::after,
  & > div {
    background-color: #ffffff;
    content: "";
    display: block;
    height: 2px;
    margin: 6px 0;
    transition: all 0.2s ease-in-out;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo src={logoSrc} alt="Sachhsoft Logo" />
      <HamburgerIcon onClick={toggleMenu}>
        <div></div>
      </HamburgerIcon>
      <NavLinks isOpen={isOpen}>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#blogs">Blogs</NavLink>
        <NavLink href="#careers">Careers</NavLink>
        <SolutionsButton>
          Let's talk
          <ArrowRight size={24} color="currentColor" strokeWidth={3} />
        </SolutionsButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
