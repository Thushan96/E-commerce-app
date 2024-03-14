import React from 'react';
import './App.css';
import MainDash from './components/MainDash/MainDash';
import NavBar from './components/NavBar/NavBar';
import RightSide from './components/RightSide/RightSide';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='AppGlass'>
        <NavBar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
