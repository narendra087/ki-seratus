import React from 'react';
import { Routes, Route } from "react-router-dom"

import LoginRoute from './components/route/LoginRoute';
import PrivateRoute from './components/route/PrivateRoute';

import Layout from './components/layout/Layout';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <LoginRoute /> }>
          <Route path="" element={ <Login/> } />
        </Route>
        
        <Route element={<Layout />}>
          <Route path="/dashboard" element={ <PrivateRoute/> }>
            <Route path="" element={<Dashboard />} />
          </Route>
        </Route>
        
        {/* 404 - Page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
