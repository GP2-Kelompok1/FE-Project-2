import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import MenteeList from './pages/MenteeList';
import MenteeLog from './pages/MenteeLog';
import MenteeAdd from './pages/MenteeAdd';
import Class from './pages/Class';
import AddUSer from './pages/AddUser';
import backgroundLanding from './assets/img/landingpage.png'
import logo from './assets/img/alterra-logo.png'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage bckLanding={backgroundLanding}
      logo={logo}/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/user/' element={<User/>}/>
      <Route path='/mentee/list' element={<MenteeList/>}/>
      <Route path='/mentee/log' element={<MenteeLog/>}/>
      <Route path='/mentee/add' element={<MenteeAdd/>}/>
      <Route path='/class' element={<Class/>}/>
      <Route path="/add/user" element={<AddUSer />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
