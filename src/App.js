import React from 'react';
import './App.css';
import './custom.scss';
import ConstructionView from './views/ConstructionView';
import HomeView from './views/HomeView';

function App() {
  return (
    <div className="text-center">
      <ConstructionView /> 
      
      {/* <HomeView/> */}
    </div>
  );
}

export default App;
