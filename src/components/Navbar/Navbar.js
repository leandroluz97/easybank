import React, { useState } from "react"
import { IoIosMenu, IoMdClose } from "react-icons/io"
import { IconContext } from "react-icons/lib"
import Backdrop from "../Backdrop/Backdrop"
import Button from "../Button/Button"
import "./Navbar.css"

const Navbar = () => {
  const [clickMenu, setClickMenu] = useState(false)
  const navClass = ["header__nav"]

  const handleMenuIcon = () => {
    setClickMenu(!clickMenu)
  }

  return (
    <IconContext.Provider value={{ color: "#2d314d" }}>
      {clickMenu ? <Backdrop /> : null}
      <header className='header'>
        <div className='container__wrapper'>
          <div className='header__wrapper'>
            <img
              src='./img/logo_dark.svg'
              alt='Logo EasyBank'
              className='header__img'
            />
            <nav
              className={
                clickMenu ? "header__nav header__nav--animate" : " header__nav "
              }
            >
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

            <div className='header__menu' onClick={handleMenuIcon}>
              {clickMenu ? (
                <IoMdClose size={25} color={"#2d314d"} />
              ) : (
                <IoIosMenu size={25} color={"#2d314d"} />
              )}
            </div>

            <div className='header__btn'>
              <Button>Request Invite</Button>
            </div>
          </div>
        </div>
      </header>
    </IconContext.Provider>
  )
}

export default Navbar
