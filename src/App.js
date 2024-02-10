import React, { useEffect } from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import HumbProvider from './provider/HumbProvider';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import { AboutUs } from './components/AboutUs/AboutUs';
import { ContactUs } from './components/ContactUs/ContactUs';


const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="main-container">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Home/Home' element={<Home />}></Route>
            <Route path='/Portfolio/Portfolio' element={<Portfolio />}></Route>
            <Route path='/AboutUs/AboutUs' element={<AboutUs />}></Route>
            <Route path='/ContactUs/ContactUs' element={<ContactUs />}></Route>
          </Routes>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

export default App;