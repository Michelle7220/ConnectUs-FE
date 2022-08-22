import React from 'react';
import {BrowserRouter as Router, 
        Routes, 
        Route, 
        Navigate,
      } from 'react-router-dom';

import LoginPage from './authPages/LoginPage/LoginPage.js';
import RegisterPage from './authPages/RegisterPage/RegisterPage.js';
import Dashboard from './Dashboard/Dashboard.js';
import AlertNotification from './shared/components/AlertNotification.js';
import './App.css';

function App() {
  return (
    <>

    <Router>
        <Routes>

          <Route  path ='/login' element = {<LoginPage />} />
          <Route  path ='/register' element = {<RegisterPage />} />
          <Route  path ='/dashboard' element = {<Dashboard />} />

          <Route path='/' element = {<Dashboard/>} /> 

        


        </Routes>
    </Router>
    <AlertNotification />
    </>
 
  );
}

export default App;
