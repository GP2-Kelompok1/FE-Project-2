import React from 'react'
import NavBar from '../components/NavBar'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [cookies,removeCookie,setCookie] = useCookies();
  const navi = useNavigate();
  const handleLogout  = () =>{
    removeCookie('Username',{path:'/'})
    removeCookie('Pass',{path:'/'})
    navi("/")
  }
  return (
   <>
      <NavBar 
      user={cookies.Username}
      logout={handleLogout}
      />
  </>
  )
}

export default Dashboard