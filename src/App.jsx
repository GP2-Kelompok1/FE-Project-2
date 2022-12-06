import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import MenteeList from './pages/MenteeList';
import MenteeLog from './pages/MenteeLog';
import MenteeAddPage from './pages/MenteeAddPage';
import Class from './pages/Class';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/" element={<User />} />
        <Route path="/mentee/list" element={<MenteeList />} />
        <Route path="/mentee/log" element={<MenteeLog />} />
        <Route path="/mentee/add/page" element={<MenteeAddPage />} />
        <Route path="/class" element={<Class />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
