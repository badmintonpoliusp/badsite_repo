// src/pages/BlogPostPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import './BlogPostPage.css';

const BlogPostPage = () => {
  // 1. Use 'postId' to match the route parameter from main.jsx
  const { postId } = useParams();

  // 2. Find the post by its 'id', not 'slug'.
  //    Use parseInt() because the postId from the URL is a string.
  const post = blogData.find(p => p.id === parseInt(postId));

  // This 'if' block is your safety check, which is great!
  if (!post) {
    return (
      <div className="blog-post-page">
        <h2>Post não encontrado!</h2>
        <Link to="/blog">Voltar para o blog</Link>
      </div>
    );
  }

  // The rest of your component is great.
  return (
    <article className="blog-post-page">

      <header className="post-header">
        <h1>{post.title}</h1>
        <p className="post-meta">{post.date}</p>
      </header>

      <div 
        className="post-content" 
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />

      {post.authorImage && (

        <footer className="post-footer">
          <img src={post.authorImage} alt={post.author} className="author-image" />
          <span className="author-name">{post.author}</span>
        </footer>
        
      )}
    </article>
  );
};

export default BlogPostPage;