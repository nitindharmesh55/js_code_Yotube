import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Logo from "../Assets/Vector.png";
import styled from "styled-components";


const Header = () => {
  return (
    <HeaderContent>
        <div className="logo">
            <img src={Logo} alt="Logo" />

        </div>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#Shop">Shop</a></li>
            <li><a href="#Add">Advertise</a></li>
            <li><a href="#Distribute">Distribute</a></li>
        </ul>

        <div className="icons">
              <CiSearch/> 
              <CiShop/>
              <CiUser />
        </div>
    </HeaderContent>
  )
}

export default Header;

const HeaderContent = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: fixed; /* change from sticky to fixed */
  top: 0;
  left: 0;       /* make sure it’s aligned to left */
  z-index: 1000; /* stay above content */
  background: #111915;
  height: 80px;
  padding: 0 2rem;

  .logo img {
    width: 120px;
  }

  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;

    li a {
      text-decoration: none;
      color: #fff;
      font-weight: 500;

      &:hover {
        color: #00ff9f;
        border-bottom: 1px solid #00ff9f;
      }
    }
  }

  .icons {
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
  }
`;

