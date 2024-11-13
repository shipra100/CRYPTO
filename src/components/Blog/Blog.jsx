// Blog.jsx
import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Cryptocurrency",
      date: "November 1, 2024",
      summary: "Exploring trends that are shaping the future of cryptocurrency and blockchain technology.",
      link: "/blog/future-of-crypto"
    },
    {
      title: "How to Start with Crypto Investments",
      date: "October 15, 2024",
      summary: "A beginner's guide on how to navigate the cryptocurrency investment landscape.",
      link: "/blog/crypto-investments"
    },
    {
      title: "Understanding Market Volatility",
      date: "September 30, 2024",
      summary: "An in-depth look at what drives cryptocurrency market volatility and how to manage it.",
      link: "/blog/market-volatility"
    },
  ];

  return (
    <section className="blog-section">
      <h2 className="blog-section-title">Latest Insights</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <article className="blog-post" key={index}>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p className="blog-summary">{post.summary}</p>
            <a href={post.link} className="blog-read-more">
              Read More
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
