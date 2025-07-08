// src/pages/BlogIndexPage.jsx

import React from 'react';

import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

import Page_title from '../components/Page_title'; 

import './BlogIndexPage.css';

const BlogIndexPage = () => {
  const mainPost = blogData.find(post => post.id === 1);

  return (
    <div className="blog-index-page">
      <section className="main-post-intro">
        
        <Page_title title = {mainPost.title} />

        <blockquote className="intro-quote">
          “{mainPost.introQuote}”
        </blockquote>
      </section>

      <section className="post-list">
        <h2>Todas as Histórias</h2>
        {blogData.map(post => (
          <div key={post.id} className="post-link-item">
            {/* --- THIS IS THE FIX --- */}
            {/* Change post.slug to post.id */}
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