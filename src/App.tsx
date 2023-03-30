import React from 'react';
import { Routes, Route } from "react-router-dom"

import LoginRoute from './components/route/LoginRoute';
import PrivateRoute from './components/route/PrivateRoute';

import Layout from './components/layout/Layout';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Family from './pages/Family';
import AdvancedForm from './pages/AdvancedForm';

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
          <Route path="/schedule" element={ <PrivateRoute/> }>
            <Route path="" element={<Schedule />} />
          </Route>
          <Route path="/family" element={ <PrivateRoute/> }>
            <Route path="" element={<Family />} />
          </Route>
          
          <Route path="/advanced-form" element={ <PrivateRoute/> }>
            <Route path="" element={<AdvancedForm />} />
          </Route>
        </Route>
        
        {/* 404 - Page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
