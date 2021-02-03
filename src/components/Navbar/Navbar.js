import React from "react"
import { IoIosMenu } from "react-icons/io"
import { IconContext } from "react-icons/lib"
import Backdrop from "../Backdrop/Backdrop"
import "./Navbar.css"
const Navbar = () => {
  return (
    <IconContext.Provider value={{ color: "#2d314d" }}>
      <Backdrop />
      <header className='header'>
        <div className='header__wrapper'>
          <img
            src='./img/logo_dark.svg'
            alt='Logo EasyBank'
            className='header__img'
          />
          <nav className='header__nav'>
            <ul className='header__list'>
              <li className='header__item'>
                <a href='#' className='header__link'>
                  Home
                </a>
              </li>
              <li className='header__item'>
                <a href='#' className='header__link'>
                  About
                </a>
              </li>
              <li className='header__item'>
                <a href='#' className='header__link'>
                  Contact
                </a>
              </li>
              <li className='header__item'>
                <a href='#' className='header__link'>
                  Blog
                </a>
              </li>
              <li className='header__item'>
                <a href='#' className='header__link'>
                  Careers
                </a>
              </li>
            </ul>
          </nav>
          <div className='header__menu'>
            <IoIosMenu size={25} color={"#2d314d"} />
          </div>
        </div>
      </header>
    </IconContext.Provider>
  )
}

export default Navbar
