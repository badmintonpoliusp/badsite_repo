import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import './BlogPostPage.css'; // Crie este arquivo CSS

const BlogPostPage = () => {
  const { postSlug } = useParams();
  const post = blogData.find(p => p.slug === postSlug);

  if (!post) {
    return (
      <div className="blog-post-page">
        <h2>Post não encontrado!</h2>
        <Link to="/blog">Voltar para o blog</Link>
      </div>
    );
  }

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