import React from 'react';
import './article.css';

const Article = ({ imgUrl, summary, text }) => (
  <div className="step0__blog-container_article">
    <div className="step0__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="step0__blog-container_article-content">
      <div>
        <h3>{text}</h3>
        <p>{summary}</p>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;