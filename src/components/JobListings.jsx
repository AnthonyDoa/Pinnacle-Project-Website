import { useState, useEffect, useMemo } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import jobsData from '../../src/jobs.json';

const JobListPage = () => {
  const [sortOrder, setSortOrder] = useState('descending');
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeJobId, setActiveJobId] = useState(null);

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

  const sortedJobsByYear = useMemo(() => {
    const jobsArray = jobsData?.jobs || [];

    if (jobsArray.length === 0) {
      return [];
    }
    if (typeof jobsArray[0]?.Year === 'undefined') {
      console.warn("Job items in the data lack a 'Year' property (case-sensitive).");
      return jobsArray;
    }

    return jobsArray.slice().sort((a, b) => {
      return sortOrder === 'ascending'
        ? a.Year - b.Year
        : b.Year - a.Year;
    });
  }, [sortOrder, jobsData]);

  const toggleJob = (jobId) => {
    setActiveJobId((prev) => (prev === jobId ? null : jobId));
  };

  return (
    <main className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-pink-500">

      <div className="custom-background-4 w-full px-auto text-center  lg:pt-10">
        <div className='container mx-auto'>
          <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-white">Campiagns</h1>
        </div>
      </div>

      {/* Sort Buttons */}
      <div className="flex justify-center space-x-4 my-8">
        <button
          className={`bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-yellow-700 transition rounded-lg font-semibold ${sortOrder === 'ascending' ? 'button-2' : 'button-3'} transition duration-300 ease-in-out`}
          onClick={() => setSortOrder('ascending')}
        >
          Year (Oldest First)
        </button>
        <button
          className={`bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-yellow-700 transition rounded-lg font-semibold ${sortOrder === 'descending' ? 'button-2' : 'button-3'} transition duration-300 ease-in-out`}
          onClick={() => setSortOrder('descending')}
        >
          Year (Newest First)
        </button>
      </div>

      {/* Job Dropdowns */}
      <div className="container grid grid-cols-1 gap-2 my-5 md:w-3/4 px-4 lg:px-0 mx-auto">
        {sortedJobsByYear.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            layout
            className="bg-white rounded-lg p-4 transition duration-300 shadow-md"
          >
            {/* Job Header */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleJob(job.id)}
            >
              {/* Display job title and year */}
              <h2 className="text-xl font-semibold text-gray-800">{job.title} <span className='text-sm text-gray-500'>({job.Year})</span></h2>
              <motion.span
                animate={{ rotate: activeJobId === job.id ? 180 : 0 }}
                className="text-gray-500"
              >
                ▼
              </motion.span>
            </div>

            {/* Dropdown Content */}
            <AnimatePresence>
              {activeJobId === job.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-4 border-t pt-4"
                >
                  {/* Display job details */}
                  <p className="text-gray-700 mb-2"><strong className="font-semibold">Description:</strong> {job.description}</p>
                  <p className="text-gray-700 mb-2"><strong className="font-semibold">Date/Type:</strong> {job.type}</p>
                  <p className="text-gray-700 mb-2"><strong className="font-semibold">Location/Charity:</strong> {job.location}</p>
                  <p className="text-gray-700 mb-2"><strong className="font-semibold">Outcome/Salary:</strong> {job.salary}</p>
                  <div className="mb-2">
                    <strong className="font-semibold">Images:</strong>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {Array.isArray(job.images) && job.images.map((imageUrl, index) => (
                        <img
                          key={index}
                          src={imageUrl}
                          alt={`${job.title} - Image ${index + 1}`}
                          className="w-32 h-auto rounded-md shadow-sm"
                        />
                      ))}
                      {!Array.isArray(job.images) && typeof job.images === 'string' && (
                        <img
                          src={job.images}
                          alt={`${job.title} - Image`}
                          className="w-32 h-auto rounded-md shadow-sm"
                        />
                      )}
                      {Array.isArray(job.images) && job.images.length === 0 && (
                        <p className="text-gray-500">No images available.</p>
                      )}
                      {!Array.isArray(job.images) && typeof job.images !== 'string' && (
                        <p className="text-gray-500">No images available.</p>
                      )}
                    </div>
                  </div>
                  {/* Removed the 'Learn More' button as 'insta' link is not in JSON */}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default JobListPage;
