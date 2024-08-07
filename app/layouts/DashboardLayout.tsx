'use client';
import { ReactNode, useState } from 'react';
import Sidebar from '../Components/SideBar';
import Navbar from '../Components/NavBar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config'; 

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [user] = useAuthState(auth);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Dashboard with children pages...
  return (
    <div className="flex">
      <Sidebar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <div className="flex-1 flex flex-col ml-0 md:ml-35">
        <Navbar user={user} mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <div className="flex-1 p-4">
          {children}     
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
