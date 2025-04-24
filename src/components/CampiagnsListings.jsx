import { useState, useEffect, useMemo } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CampaignsData from '../Campiagns.json'; // Make sure this path is correct

const CampiagnsListings = () => {
  const [sortOrder, setSortOrder] = useState('descending');
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeCampaignId, setActiveCampaignId] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const sortedCampaignByYear = useMemo(() => {
    const campaignsArray = CampaignsData?.Campiagns || [];

    if (campaignsArray.length === 0) {
      return [];
    }

    if (campaignsArray.length > 0 && typeof campaignsArray[0]?.Year === 'undefined') {
      console.warn(
        "Campaign items in the data might lack a 'Year' property (case-sensitive)."
      );
    }

    const filteredCampaigns = campaignsArray.filter(campaign => typeof campaign?.Year === 'number' && !isNaN(campaign.Year));

    return filteredCampaigns.slice().sort((a, b) => {
      return sortOrder === 'ascending' ? a.Year - b.Year : b.Year - a.Year;
    });
  }, [sortOrder, CampaignsData]);

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

      <div className="container grid grid-cols-1 gap-4 md:w-5/6 lg:w-5/6 xl:w-5/6 px-4 mx-auto">
        {sortedCampaignByYear.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            layout
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200"
          >
            <div
              className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-50 transition-colors"
              onClick={() => toggleCampaign(job.id)}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {job.title}{' '}
                <span className="text-sm font-normal text-gray-500">
                  ({job.Year})
                </span>
              </h2>
              <motion.span
                animate={{ rotate: activeCampaignId === job.id ? 180 : 0 }}
                className="text-blue-600 text-xl"
              >
                ▼
              </motion.span>
            </div>

            <AnimatePresence>
              {activeCampaignId === job.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden border-t border-gray-200 px-4 pt-4 pb-5 flex flex-col gap-3 bg-gray-50"
                >
                  {job.description && (
                    <div className="bg-white p-3 rounded-md shadow-sm border border-gray-200">
                      <strong className="font-semibold text-gray-700 block mb-1">
                        Description:
                      </strong>
                      <p className="text-gray-600 text-sm">{job.description}</p>
                    </div>
                  )}

                  {(job.type || job.location) && (
                    <div className="bg-white p-3 rounded-md shadow-sm border border-gray-200">
                      {job.type && <p className="text-gray-600 text-sm mb-1"><strong className="font-semibold text-gray-700">Date/Type:</strong> {job.type}</p>}
                      {job.location && <p className="text-gray-600 text-sm"><strong className="font-semibold text-gray-700">Location/Charity:</strong> {job.location}</p>}
                    </div>
                  )}

                  {job.salary && (
                    <div className="bg-white p-3 rounded-md shadow-sm border border-gray-200">
                      <p className="text-gray-600 text-sm">
                        <strong className="font-semibold text-gray-700">
                          Outcome/Salary:
                        </strong>{' '}
                        {job.salary}
                      </p>
                    </div>
                  )}

                  {(job.images && job.images.length > 0) || typeof job.images === 'string' ? (
                    <div className="bg-white p-3 rounded-md shadow-sm border border-gray-200">
                      <strong className="font-semibold text-gray-700 block mb-2">
                        Images:
                      </strong>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(job.images) ? (
                          job.images.map((imageUrl, index) => (
                            <img
                              key={index}
                              src={imageUrl}
                              alt={`${job.title} - Image ${index + 1}`}
                              className="w-28 h-28 object-cover rounded border border-gray-300 shadow-sm"
                            />
                          ))
                        ) : typeof job.images === 'string' ? (
                          <img
                            src={job.images}
                            alt={`${job.title} - Image`}
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
        {sortedCampaignByYear.length === 0 && (
          <div className="text-center text-white py-10 col-span-full">
            <p>No campaigns found or data is loading.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CampiagnsListings;
