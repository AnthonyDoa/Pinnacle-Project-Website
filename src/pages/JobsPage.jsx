import JobListings from '../components/JobListings';
import ImageTrack from '../components/ImageTrack';
import { Link } from "react-router-dom";
import bannerImage from "../assets/images/Banner.jpeg";
const JobPage = ({
  title = "Goals & Camapigns",
  subtitle = "Make a difference in your community and learn about our goals and campaigns in helping families and individuals in the Mississauga area and globally.",
}) => {
  return (
    <section
      className="bg-cover bg-center py-20 mb-4"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-left">
          <h1 className="text-4xl font text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
          
            
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center p-10 bg-black text-white">
      <img
        src="/assets/images/Banner.jpeg"
        alt="Who we are"
        className="w-96 h-auto object-cover rounded-lg shadow-lg md:mr-10"
      />
      <div className="text-left max-w-xl">
        <h1 className="text-3xl font-bold">Monthly Camapigns </h1>
        <p className="mt-4 text-lg">
        Join The Pinnacle Project in our monthly campaigns, each with a specific focus. From education to the environment, health, and community well-being, we tackle different goals each month. These initiatives are tailored to address specific needs within our community, making it easy for you to engage with causes that matter most to you. By participating in these impactful campaigns, you contribute to the overall progress of our community. Whether you're passionate about learning, sustainability, or health, there's a monthly opportunity for you to make a meaningful difference. Let's work together, one focused campaign at a time, to create positive and lasting change within our community.
        </p> </div></div>
      <JobListings />
       <div className="flex flex-col md:flex-row items-center p-10 bg-indigo-600 text-white">
            {/* Text Section - Now on the Left */}
            <div className="text-left max-w-xl md:mr-10">
              <h1 className="text-3xl font-bold">Getting Involved & Volunteering</h1>
              <p className="mt-4 text-lg">
              Unlock meaningful experiences by volunteering with The Pinnacle Project! High school students can contribute their time to make a positive impact on our community. Gain valuable volunteer hours while making a difference in the lives of others. As a token of appreciation, participants receive a reference letter highlighting their dedication and contributions. Join us in fostering positive change and building a better future together. Enrich your high school journey with purposeful volunteering at The Pinnacle Project.
              </p>
      
             
      
              {/* Link Button */}
              <Link
               to = "/Voluteer&Parthership"
                
                className="mt-6 inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition"
              >
                Learn More
              </Link>
            </div>
      
            {/* Image Section - Now on the Right */}
            <img
              src={bannerImage}
              alt="Who we are"
              className="w-96 h-auto object-cover rounded-lg shadow-lg md:ml-10"
            />
          </div>
          <div>
          <ImageTrack />;
          </div>
          
    </section>
  );
};

export default JobPage;
