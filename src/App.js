import React from 'react';
import "./App.css";
import { Header } from './components/Header/Header';
import HumbProvider from './provider/HumbProvider';


const App = () => {
  return (
    <HumbProvider>
      <div className='container'>
        <Header />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </HumbProvider>
  )
}

export default App;