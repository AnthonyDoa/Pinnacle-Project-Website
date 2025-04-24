import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CampiagnsPage from './pages/CampiagnsPage';
import NotFoundPage from './pages/NotFoundPage';
import OurteamFull from './pages/OurteamFull';
import VolunteeringPartnerships from './pages/VolunteeringPartnerships';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<CampiagnsPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/OurteamFull' element={<OurteamFull />} />
        <Route path='/VolunteeringPartnerships' element={<VolunteeringPartnerships />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
