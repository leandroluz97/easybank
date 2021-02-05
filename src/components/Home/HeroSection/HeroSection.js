import React from "react"
import Button from "../../Button/Button"
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <main className='hero'>
      <div className='hero__wrapper'>
        <div className='hero__imgs'>
          <img
            src='img/design_solid_header.svg'
            className='hero__img hero__img--1'
            alt='vectors'
          />
          <img
            src='img/design_gradient_header.svg'
            className='hero__img hero__img--2'
            alt='vectors'
          />
        </div>

        <div className='hero__content'>
          <h1 className='hero__title'>Next generation digital banking</h1>
          <p className='hero__copy'>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <div className='hero__btn'>
            <Button>Request Invite</Button>
          </div>
        </div>
      </div>
      <img src='img/phones.svg' className=' hero__img--3' alt='vectors' />
    </main>
  )
}

export default HeroSection
