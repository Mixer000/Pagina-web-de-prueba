import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-black">
      <Navbar />
      <main className="flex-grow pt-16"> 
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;