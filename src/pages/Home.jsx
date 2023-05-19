import React, { useContext, useEffect } from 'react'
import Dashboard from './Dashboard'
import FileUpload from './FileUpload'
import { navContext } from '../context/Context'
import FilePreview from './FilePreview'
import Profile from './Profile'
import Settings from './Settings'
import Navbar from '../components/Navbar'

const Home = () => {

  const context = useContext(navContext);
  const isHidden = (num) => context.currentTab == num ? false : true;

  useEffect(()=>{
    console.log(context.currentTab);
  })

  return (
    <>
      <Navbar/>
      <Dashboard  hidden={isHidden(1)}/>
      <FileUpload hidden={isHidden(2)}/>
      <FilePreview hidden={isHidden(3)}/>
      <Profile hidden={isHidden(4)}/>
      <Settings hidden={isHidden(5)}/>

    </>
  )
}

export default Home