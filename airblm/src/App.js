import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Resources from './Components/Resources'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className = 'Welcome'>
     <Welcome id='Welcome'></Welcome>
     </div>
     <Resources id='Resources'></Resources>
     </div>
  );
}

export default App;
