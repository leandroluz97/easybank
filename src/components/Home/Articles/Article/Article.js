import React from "react"
import "./Article.css"
const Article = ({ img, author, title, body }) => {
  return (
    <div className='article__card col-4-of-1'>
      <img src={img} alt='post' className='article__img mb-small' />
      <div className='article__content'>
        <p className='article__author'>By {author}</p>
        <h5 className='article__title'>{title}</h5>
        <p className='article__body'>{body}</p>
      </div>
    </div>
  )
}

export default Article
