import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const campaigns = [
  {
    id: 'food-aid',
    title: 'Food Aid for Families',
    description:
      'Helping low-income families with essential groceries and meal support through our weekly donation drives.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlbHBpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 'education-support',
    title: 'Education Support for Children',
    description:
      'Providing school supplies and educational mentorship to underserved students in our local communities.',
    image: 'https://images.unsplash.com/photo-1509059852496-f3822ae057bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVscGluZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D', 
  },
  {
    id: 'community-health',
    title: 'Community Health & Outreach',
    description:
      'Delivering health kits, hygiene essentials, and access to medical volunteers in under-resourced neighborhoods.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVscGluZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
  },
];

const GoalsCampaigns = () => {
  return (
    <section className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-16">Goals & Campaigns</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg group relative"
            >
              <Link to="/Campaigns">
  <img
    src={campaign.image}
    alt={campaign.title}
    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
  />
</Link>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 pointer-events-none">
                <h3 className="text-2xl font-semibold mb-3">{campaign.title}</h3>
                <p className="text-base text-gray-300">{campaign.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsCampaigns;
