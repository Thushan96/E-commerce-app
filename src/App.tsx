import React from 'react';
import './App.css';
import MainDash from './components/MainDash/MainDash';
import NavBar from './components/NavBar/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='AppGlass'>
        <NavBar/>
        <MainDash/>
      </div>
    </div>
  );
}

export default App;
