// BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const blogData = {
  'the-power-of-giving': {
    title: 'The Power of Giving: How Charity Can Transform Lives',
    date: 'Mar 31, 2024',
    content: `
      Charity and giving have the power to transform lives in profound ways...
      [continue full content here]
    `,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    innerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
  'benefits-of-volunteering': {
    title: 'The benefits of volunteering for a charitable cause.',
    date: 'Mar 07, 2024',
    content: `
      Volunteering has benefits for both the volunteer and those receiving help...
      [continue full content here]
    `,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    innerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData[id];

  if (!post) return <h2>Post not found</h2>;

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <img src={post.image} alt={post.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
      <h1 style={{ marginTop: '1rem' }}>{post.title}</h1>
      <p style={{ color: 'gray' }}>{post.date} - By The Pinnacle Project</p>
      <p style={{ marginTop: '1.5rem', lineHeight: '1.7' }}>{post.content}</p>

      {post.innerImage && (
        <img
          src={post.innerImage}
          alt="Supporting"
          style={{ width: '100%', borderRadius: '12px', marginTop: '1.5rem' }}
        />
      )}
    </div>
  );
};

export default BlogPost;
