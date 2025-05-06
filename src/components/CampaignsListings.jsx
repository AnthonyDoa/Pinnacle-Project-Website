import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
 import Campaigns from '../Campaigns.json';

const CampaignsListings = () => {
  const [sortOrder, setSortOrder] = useState('descending');
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeCampaignId, setActiveCampaignId] = useState(null);
  const [campaignData, setCampaignData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Handle window width
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (Campaigns && Array.isArray(Campaigns.Campaigns)) { // Access the array using Campaigns.Campaigns
      setCampaignData(Campaigns.Campaigns);
    } else {
      console.error("Invalid campaigns format in JSON");
    }
    setLoading(false);
  }, []);

  // Sort campaigns
  const sortedCampaignByYear = useMemo(() => {
    if (!Array.isArray(campaignData) || campaignData.length === 0) return [];

    const filteredCampaigns = campaignData.filter(
      (c) => typeof c?.Year === 'number' && !isNaN(c.Year)
    );

    return filteredCampaigns.slice().sort((a, b) =>
      sortOrder === 'ascending' ? a.Year - b.Year : b.Year - a.Year
    );
  }, [sortOrder, campaignData]);

  const toggleCampaign = (campaignId) => {
    setActiveCampaignId((prev) => (prev === campaignId ? null : campaignId));
  };

  return (
    <main className="flex flex-col justify-start items-center min-h-screen bg-gradient-to-br from-blue-600 to-pink-500 py-10">
      <div className="w-full text-center mb-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-md">
            Campaigns
          </h1>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mb-10">
        <button
          className={`text-white px-5 py-2 rounded-lg shadow font-semibold transition duration-300 ease-in-out transform hover:scale-105 ${
            sortOrder === 'ascending'
              ? 'bg-yellow-500 ring-2 ring-yellow-300'
              : 'bg-blue-700 hover:bg-blue-800'
          }`}
          onClick={() => setSortOrder('ascending')}
        >
          Year (Oldest First)
        </button>
        <button
          className={`text-white px-5 py-2 rounded-lg shadow font-semibold transition duration-300 ease-in-out transform hover:scale-105 ${
            sortOrder === 'descending'
              ? 'bg-yellow-500 ring-2 ring-yellow-300'
              : 'bg-blue-700 hover:bg-blue-800'
          }`}
          onClick={() => setSortOrder('descending')}
        >
          Year (Newest First)
        </button>
      </div>

      {loading ? (
        <div className="text-white text-center py-6">Loading campaigns...</div>
      ) : (
        <div className="container grid grid-cols-1 gap-4 md:w-5/6 lg:w-5/6 xl:w-5/6 px-4 mx-auto">
          {sortedCampaignByYear.map((campaign) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              layout
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200"
            >
              <div
                className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-50 transition-colors"
                onClick={() => toggleCampaign(campaign.id)}
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {campaign.title}{' '}
                  <span className="text-sm font-normal text-gray-500">
                    ({campaign.Year})
                  </span>
                </h2>
                <motion.span
                  animate={{ rotate: activeCampaignId === campaign.id ? 180 : 0 }}
                  className="text-blue-600 text-xl"
                >
                  ▼
                </motion.span>
              </div>

              <AnimatePresence>
                {activeCampaignId === campaign.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden border-t border-gray-200 px-4 pt-4 pb-5 flex flex-col gap-3 bg-gray-50"
                  >
                    {campaign.description && (
                      <div className="bg-white p-3 rounded-md shadow-sm border border-gray-200">
                        <strong className="font-semibold text-gray-700 block mb-1">
                          Description:
                        </strong>
                        <p className="text-gray-600 text-sm">{campaign.description}</p>
                      </div>
                    )}

                    {(campaign.Date || campaign.Charity) && (
                      <div className="bg-white p-3 rounded-md shadow-sm border border-gray-200">
                        {campaign.Date && (
                          <p className="text-gray-600 text-sm mb-1">
                            <strong className="font-semibold text-gray-700">Date:</strong>{' '}
                            {campaign.Date}
                          </p>
                        )}
                        {campaign.Charity && (
                          <p className="text-gray-600 text-sm">
                            <strong className="font-semibold text-gray-700">Charity:</strong>{' '}
                            {campaign.Charity}
                          </p>
                        )}
                      </div>
                    )}

                    {campaign.Raised && (
                      <div className="bg-white p-3 rounded-md shadow-sm border border-gray-200">
                        <p className="text-gray-600 text-sm">
                          <strong className="font-semibold text-gray-700">Raised:</strong>{' '}
                          {campaign.Raised}
                        </p>
                      </div>
                    )}

                    {(campaign.images && campaign.images.length > 0) ||
                    typeof campaign.images === 'string' ? (
                      <div className="bg-white p-3 rounded-md shadow-sm border border-gray-200">
                        <strong className="font-semibold text-gray-700 block mb-2">
                          Images:
                        </strong>
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(campaign.images) ? (
                            campaign.images.map((imageUrl, index) => (
                              <img
                                key={index}
                                src={imageUrl}
                                alt={`${campaign.title} - Image ${index + 1}`}
                                className="w-28 h-28 object-cover rounded border border-gray-300 shadow-sm"
                              />
                            ))
                          ) : typeof campaign.images === 'string' ? (
                            <img
                              src={campaign.images}
                              alt={`${campaign.title} - Image`}
                              className="w-28 h-28 object-cover rounded border border-gray-300 shadow-sm"
                            />
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {sortedCampaignByYear.length === 0 && !loading && (
            <div className="text-center text-white py-10 col-span-full">
              <p>No campaigns found or data is loading.</p>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default CampaignsListings;
