import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-400 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-400 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className='sticky top-0 z-50 bg-black border-b border-black'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <img className='h-10 w-auto' src={logo} alt='The Pinnacle Project' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
              The Pinnacle Project
              </span>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/Campaigns' className={linkClass}>
                  Campaigns
                </NavLink>
                <NavLink to='/OurteamFull' className={linkClass}>
                  Our Team
                </NavLink>
                <NavLink to='/VolunteeringPartnerships' className={linkClass}>
                  Voluteer & Partnerships
                </NavLink>
                <NavLink to='/Blog' className={linkClass}>
                  Blog
                </NavLink>
                <NavLink to='https://www.instagram.com/the_pinnacleproject/' className={linkClass}>
                  Instagram
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
