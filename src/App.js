import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';

function App() {
  return (
    <div className="app">
      <Header/>
      
      <div className="app__body">
        <Sidebar />
        <Feed />
        
      </div>
    </div>
  );
}

export default App;
