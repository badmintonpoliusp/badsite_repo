// src/pages/BlogIndexPage.jsx

import React from 'react';

import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

import Page_title from '../components/Page_title'; 

import './BlogIndexPage.css';

const BlogIndexPage = () => {
  return (
    <div className="blog-index-page">
      <section className="blog-intro">
        
        <h1>Além das Quadras: <br></br> O Legado da Família Bad Poli</h1>

        <blockquote className="intro-quote">
          “{"Aqui, o badminton vai além do esporte. É união, aprendizado e a construção de uma história que nunca termina."}”
        </blockquote>
      </section>

      <section className="post-list">
        <h2>Todas as Histórias</h2>
        {blogData.map(post => (
          <div key={post.id} className="post-link-item">
            <Link to={`/blog/${post.id}`}>
              <h3>{post.title}</h3>
              <span>{post.date} - por {post.author}</span>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogIndexPage;