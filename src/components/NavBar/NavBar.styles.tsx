import styled from "styled-components";
import {Link} from "react-scroll"

export const Nav = styled.nav`
  background: #000000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  /* padding: 0.5rem calc((100vw - 1000px) / 2); */
  z-index: 10;
  top: 0;
  align-items: center;
  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
    /* margin-right: 24px; */
  }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    
    color: #15cdfc;
    &:hover {
      color: #fff;
    }
  }

  &:hover {
    color: #15cdfc;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;



// export const NavLogo = styled(Link)`
//   display: flex;
//   justify-self: flex-start;
//   align-items: center;
//   cursor: pointer;
//   margin-left: 24px;

// `;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-self: flex-start;
  margin-left: 24px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.button`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010666;
  }
`;
