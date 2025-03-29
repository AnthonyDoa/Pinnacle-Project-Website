import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Ourteam from '../components/Ourteam';
import Qoute from '../components/Qoute';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
import Voluteer from '../components/Voluteer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <Qoute />
      <JobListings isHome={true} />
      <ViewAllJobs />
      <Ourteam />
      <Voluteer />

    </>
  );
};
export default HomePage;
