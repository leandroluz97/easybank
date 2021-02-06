import React from "react"
import "./Footer.css"
import Button from "../../Button/Button"
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai"
import "./Footer.css"
import { IconContext } from "react-icons"
const Footer = () => {
  return (
    <IconContext.Provider value={{ className: "react__icons" }}>
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__content'>
            <div className='footer__img'>
              <img src='img/logo_light.svg' alt='Logo easy bank' />
            </div>

            <div className='footer__icons'>
              <div className='footer__icon'>
                <AiFillFacebook />
              </div>
              <div className='footer__icon'>
                <AiFillYoutube />
              </div>
              <div className='footer__icon'>
                <AiOutlineTwitter />
              </div>
              <div className='footer__icon'>
                <AiFillLinkedin />
              </div>
              <div className='footer__icon'>
                <AiOutlineInstagram />
              </div>
            </div>

            <nav className='footer__nav'>
              <ul className='footer__list'>
                <li className='footer__item'>
                  <a href='#'>About Us</a>
                </li>
                <li className='footer__item'>
                  <a href='#'>Contact</a>
                </li>
                <li className='footer__item'>
                  <a href='#'>Blog</a>
                </li>
                <li className='footer__item'>
                  <a href='#'>Careers</a>
                </li>
                <li className='footer__item'>
                  <a href='#'>Support</a>
                </li>
                <li className='footer__item'>
                  <a href='#'>Privacy Policy</a>
                </li>
              </ul>
            </nav>
            <div className='footer__btn'>
              <Button> Request invite</Button>
            </div>

            <p className='footer__copyright'>
              &#169; Easybank. All Rights Reserved by
            </p>
          </div>
        </div>
      </footer>
    </IconContext.Provider>
  )
}

export default Footer
