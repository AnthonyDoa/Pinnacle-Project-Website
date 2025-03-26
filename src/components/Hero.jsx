import { Link } from "react-router-dom";
import bannerImage from "../assets/images/Banner.jpeg";

const Hero = ({
  title = "Pinnacle Project",
  subtitle = "Making an Impact and Changing Lives through Initiatives and Campaigns in the Mississauga Community",
}) => {
  return (
    <section
      className="bg-cover bg-center py-20 mb-4"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
          <Link
            to="/jobs"
            className="inline-block bg-indigo text-white border-2 border-white rounded-lg px-8 py-2 mt-4"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
