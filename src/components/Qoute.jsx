import React from 'react';
import styled from 'styled-components';

const QuoteCard = styled.div`
  background-color:rgba(10, 133, 167, 0.43);
  border-radius: 8px;
  padding: 3rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin: 2rem auto;
  max-width: 768px;
  text-align: center;
`;

const QuoteText = styled.blockquote`
  color: #333;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const Source = styled.p`
  color: #777;
  font-size: 0.9rem;
`;

const Title = styled.h3`
  color: #2c5282; /* A nice blue */
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FramedQuote = () => {
  const quote = `"A project with no end date always seems to require more work, continually ongoing. The pinnacle represents the highest point of our goals, where we want to reach. When these ideas come together, The Pinnacle Project emerges as a unique initiative, a transformative endeavor. We aim to create hope and a positive change in our local  communities for a brighter future."`;
  const source = "Cody Doan & Meesam Ali Merchant (Co-founders)";
  const title = "The Meaning Behind The Pinnacle Project";

  return (
    <QuoteCard>
      <Title>{title}</Title>
      <QuoteText>{quote}</QuoteText>
      <Source>- {source}</Source>
    </QuoteCard>
  );
};

export default FramedQuote;
