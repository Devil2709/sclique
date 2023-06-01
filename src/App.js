import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './HelloWorld';
import LongCard from './LongCard'

function App() {
  return (
    <div className="App">
        <h1>Custom</h1>
        <LongCard title="Coding Challenge" icon={logo} description="Blah Blah"/>
    </div>
  );
}

export default App;
