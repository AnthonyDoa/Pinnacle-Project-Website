import React from 'react';
import FQASection from '../components/FQASection';

const VolunteeringPartnerships = () => {
  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Volunteering and Partnerships</h1>
          <p style={styles.heroSubtitle}>
            Work with our organization and explore ways you can get involved in your community, while making a difference.
          </p>
        </div>
      </div>

      {/* Getting Involved Section */}
      <div style={styles.section}>
        <div style={styles.sectionContent}>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
            alt="Make a change"
            style={styles.sectionImage}
          />
          <div style={styles.sectionText}>
            <h2>Getting Involved</h2>
            <p>
              Join <strong>The Pinnacle Project</strong> as a volunteer and make a direct impact. Opportunities in
              community outreach, environment, and education await you.
            </p>
            <p>
              Your involvement sparks positive change and creates a lasting difference. Be part of a community-driven initiative,
              contribute your skills, and witness the meaningful impact of your efforts.
            </p>
          </div>
        </div>
      </div>

      {/* Volunteer Forms Section */}
      <div style={styles.section}>
        <div style={styles.sectionContent}>
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
            alt="Form filling"
            style={styles.sectionImage}
          />
          <div style={styles.sectionText}>
            <h2>Volunteer Forms</h2>
            <p>
              Fill out our simple form to express your interest in volunteering with us.
              We appreciate your willingness to make a difference!
            </p>
            <p>
              Expect to hear back from us soon with all the details you need to start your fulfilling journey
              as a valued member of our volunteer team.
            </p>
            <button style={styles.button}>Volunteer Now</button>
          </div>
        </div>
      </div>

      <FQASection />

      {/* Partnerships Section */}
      <div style={styles.section}>
        <div style={styles.sectionContent}>
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
            alt="Partnership"
            style={styles.sectionImage}
          />
          <div style={styles.sectionText}>
            <h2>Partnerships</h2>
            <p>
              We're actively seeking partnerships with clubs and organizations to amplify the impact of our project.
              Collaborating with like-minded groups enhances our collective ability to achieve shared goals.
            </p>
            <p>
              If your club or organization aligns with our mission, let’s explore the possibilities of collaboration,
              forging a path toward positive change and a brighter future for all.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div style={styles.contactSection}>
        <h2>Contact Community Outreach</h2>
        <p>Email us at <a href="mailto:community@pinnacleproject.org" style={{ color: '#4fc3f7' }}>community@pinnacleproject.org</a> or speak to a representative at your school.</p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: '#121212',
    color: '#f5f5f5',
    lineHeight: '1.6',
  },
  hero: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 20px',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '10px',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    fontWeight: '300',
  },
  section: {
    padding: '60px 20px',
    backgroundColor: '#1e1e1e',
  },
  sectionContent: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1100px',
    margin: '0 auto',
    alignItems: 'center',
    gap: '30px',
  },
  sectionImage: {
    flex: '1 1 300px',
    maxWidth: '400px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
  },
  sectionText: {
    flex: '2 1 500px',
    fontSize: '1rem',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#4fc3f7',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  faq: {
    maxWidth: '700px',
    margin: '20px auto',
  },
  contactSection: {
    padding: '40px 20px',
    backgroundColor: '#0d0d0d',
    textAlign: 'center',
  },
};

export default VolunteeringPartnerships;
