import React from "react"
import "./Articles.css"
import { articlesData } from "./ArticleData.js"
import Article from "./Article/Article"

const Articles = () => {
  return (
    <section className='articles '>
      <div className='articles__container'>
        <div className='articles__content'>
          <div className='articles__header'>
            <h2 className='articles__title secundary-heading mb-medium'>
              Latest Articles
            </h2>
          </div>
        </div>
        <div className='container'>
          {articlesData.map((post) => (
            <Article
              key={post.id}
              img={post.img}
              author={post.author}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles
