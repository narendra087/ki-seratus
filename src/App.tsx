import React from 'react';
import { Routes, Route, Link } from "react-router-dom"

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="dashboard" element={ <Dashboard/> } />
        
        {/* 404 - Page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
