import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What Does a Volunteer Do?',
      answer:
        'Volunteers contribute in a variety of ways in our campaigns – we will make clear your responsibilities closer to date with specifics of our campaign! Tasks include event support, clean-ups, and leading workshops.',
    },
    {
      question: 'Do I Need Specific Skills?',
      answer:
        'No specific skills are needed! We welcome volunteers of all backgrounds. We’ll provide any training you need to feel comfortable and empowered in your role.',
    },
    {
      question: 'How Much Time is Required?',
      answer:
        'Volunteering with us is flexible. Whether you can help at a one-time event or commit to a longer project, we’re grateful for your support!',
    },
    {
      question: 'How Do I Volunteer with The Pinnacle Project?',
      answer:
        'Simply fill out the volunteer interest form on this page, or contact us directly. We’ll follow up with next steps!',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>FAQ | Volunteering with Us</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={styles.faqItem}>
          <div style={styles.question} onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            <span>{openIndex === index ? '▾' : '▸'}</span>
          </div>
          {openIndex === index && <p style={styles.answer}>{faq.answer}</p>}
          <hr style={styles.divider} />
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '60px 20px',
    backgroundColor: '#1e1e1e',
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '40px',
  },
  faqItem: {
    marginBottom: '20px',
  },
  question: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '10px 0',
  },
  answer: {
    padding: '10px 0',
    fontSize: '1rem',
    color: '#ccc',
  },
  divider: {
    borderColor: '#333',
  },
};

export default FAQSection;
