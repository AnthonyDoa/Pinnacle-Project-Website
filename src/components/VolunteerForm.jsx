import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const VolunteerSectionContainer = styled.div`
  padding-top: 4rem;
  padding-bottom: 6rem;
  background-image: linear-gradient(to bottom right,rgb(2, 2, 2),rgb(93, 96, 96));
`;

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  
`;

const Title = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 600;
  color:rgb(255, 255, 255); 
  margin-bottom: 1rem;
`;

const Separator = styled.div`
  width: 4rem;
  height: 0.25rem;
  background-color: #4299e1; /* Light blue */
  border-radius: 9999px;
  margin-left: auto;
  margin-right: auto;
`;

const VolunteerBox = styled.div`
  background-image: url(https://images.unsplash.com/photo-1744058588832-5a0cf779b215?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8);
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 3rem;
  color: white; /* Text color on the image */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
`;

const Content = styled.div`
  position: relative;
  z-index: 10; /* Ensure text is above the overlay */
`;

const LearnMoreButton = styled(Link)`
  display: inline-block, center;
  background-color: #667eea; /* Purple-blue */
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
  margin-top: 1.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a67d8;
  }
`;

const VoluteerForm = () => {
  const text = `Fill out our simple form to express your interest in volunteering with us. We appreciate your willingness to make a difference! Expect to hear back from us soon with all the details you need to start your fulfilling journey as a valued member of our volunteer team.`;

  return (
    <VolunteerSectionContainer>
      <Container>
        <TitleWrapper>
          <Title>Volunteer Forms</Title>
          <Separator />
        </TitleWrapper>
        <VolunteerBox>
          <Overlay />
          <Content>
            <p style={{ lineHeight: '1.75rem', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              {text}
            </p>
            <LearnMoreButton to="https://docs.google.com/forms/d/e/1FAIpQLSfVzAeHemrRJkDL_XRqiwH_HujKouzVKO9XcMojnr91y49cCA/viewform">Voluteer Now</LearnMoreButton>
          </Content>
        </VolunteerBox>
      </Container>
    </VolunteerSectionContainer>
  );
};

export default VoluteerForm;
