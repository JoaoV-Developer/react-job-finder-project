import React from 'react'

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DevsAndEmployers from '../components/DevsAndEmployers';
import BrowseJobs from '../components/BrowseJobs';

const HomePage = () => {
  return (
    <>
        <Hero/>
        <DevsAndEmployers/>
        <BrowseJobs isHome={true}/>
    </>
  )
}

export default HomePage