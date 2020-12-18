import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      
      <div className="app__body">
        <Sidebar />
      </div>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;
