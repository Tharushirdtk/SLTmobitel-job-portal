import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNav from '../components/SideNav';
import JobCreation from './JobCreation';
import JobModification from './JobModification';
import AdminNavBar from '../components/AdminNavBar';
import ReceivedCVs from './ReceivedCVs';
import AcceptedCVs from './AcceptedCVs';

const AdminPage = () => {
  return (
  <>
    <AdminNavBar/>
    <div className="flex">
      <SideNav />
      <div className="ml-64 p-6 w-full">
        <Routes>
          <Route path="job-creation" element={<JobCreation />} />
          <Route path="job-modification" element={<JobModification />} />
          <Route path="received-cvs" element={<ReceivedCVs />} />
          <Route path="accepted-cvs" element={<AcceptedCVs />} />
        </Routes>
      </div>
    </div>
  </>
    
  );
};

export default AdminPage;
