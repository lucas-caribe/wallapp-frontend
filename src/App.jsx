import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
