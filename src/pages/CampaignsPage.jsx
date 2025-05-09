import CampaignsListings from '../components/CampaignsListings';
import ImageTrack from '../components/ImageTrack';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';





const CampaignsPage = ({

}) => {
  return (
    <section className= "bg-black"
      
       
    >
<div
  className="hero-container flex flex-col items-center justify-start pt-20"
  style={{
    backgroundImage: 'url("https://images.unsplash.com/photo-1564577159902-0494decdb93e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '60vh', /* Adjust this value as needed */
  }}
>
  <div className="max-w-4xl mx-auto text-center space-y-8">
    <div className="inline-block">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="text-3xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-white"
      >
        Goals & Campaigns
      </motion.h1>
    </div>

    <div className="inline-block">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className=" text-xl sm:text-3xl lg:text-3xl font-bold text-transparent bg-clip-text bg-white"
      >
        Make a difference in your community and learn about our goals and
        campaigns in helping families and individuals in the Mississauga area
        and globally.
      </motion.h2>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
    ></motion.div>
  </div>
</div>
      <div className="flex flex-col md:flex-row items-center p-10 bg-black text-white">
      <img
        src="https://www.smallbusinesscoach.org/wp-content/uploads/2022/05/marketing-campaigns.jpg"
        alt="Who we are"
        className="w-96 h-auto object-cover rounded-lg shadow-lg md:mr-10"
      />
      <div className="text-left max-w-xl">
        <h1 className="text-3xl font-bold">Monthly Camapigns </h1>
        <p className="mt-4 text-lg">
        Join The Pinnacle Project in our monthly campaigns, each with a specific focus. From education to the environment, health, and community well-being, we tackle different goals each month. These initiatives are tailored to address specific needs within our community, making it easy for you to engage with causes that matter most to you. By participating in these impactful campaigns, you contribute to the overall progress of our community. Whether you're passionate about learning, sustainability, or health, there's a monthly opportunity for you to make a meaningful difference. Let's work together, one focused campaign at a time, to create positive and lasting change within our community.
        </p> </div></div>
      <CampaignsListings />
       
          <div className="bg-black text-white min-h-screen">
  <ImageTrack />
</div>
          <div style={{ backgroundColor: '#1a1a1a', color: 'white', textAlign: 'center', padding: '6rem 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '2rem' }}>
        Local volunteers are essential to the<br />success of our monthly campaigns.
      </h1>
      <Link
        to="/VolunteeringPartnerships"
        style={{
          display: 'inline-block',
          backgroundColor: 'transparent',
          border: '2px solid white',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={e => {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = '#1a1a1a';
        }}
        onMouseOut={e => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = 'white';
        }}
      >
        Volunteer Today
      </Link>
    
          
            
        </div>
   
          
          
    </section>
  );
};

export default CampaignsPage;







































