import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 'the-power-of-giving',
    title: 'The Power of Giving: How Charity Can Transform Lives',
    date: 'Mar 31, 2024',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
  {
    id: 'benefits-of-volunteering',
    title: 'The benefits of volunteering for a charitable cause.',
    date: 'Mar 07, 2024',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
];

const Blog = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Blog</h1>

      {/* Search bar */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search"
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '250px',
          }}
        />
      </div>

      {/* Blog cards */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'flex-start',
        }}
      >
        {blogPosts.map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              width: 'calc(50% - 1rem)', // 2 cards per row with spacing
              maxWidth: '500px',
            }}
          >
            <div>
              <img
                src={post.image}
                alt={post.title}
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
              />
              <h3 style={{ marginTop: '1rem', fontSize: '1.2rem' }}>{post.title}</h3>
              <p style={{ color: 'gray', fontSize: '0.9rem' }}>{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
