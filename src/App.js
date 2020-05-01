import React from 'react';

import TopHeader from './components/TopHead';
import Header from './components/Header';
import Banner from './components/Banner';
import Blogs from './components/Blogs';
import SearchProfile from './components/searchProfile';
import RecProfile from './components/RecProfile';
import LifePartner from './components/LifePartner';
import Advertiser from './components/Advertiser';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Banner />
      <Blogs />
      <SearchProfile />
      <RecProfile />
      <LifePartner />
      <Advertiser />
      <Footer />
    </div>
  );
}

export default App;
