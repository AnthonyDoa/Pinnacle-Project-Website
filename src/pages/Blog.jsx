import React, { useEffect } from 'react';
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
  useEffect(() => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Blog</h1>
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
              width: 'calc(50% - 1rem)',
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
