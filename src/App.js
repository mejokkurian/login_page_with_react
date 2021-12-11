import './App.css';
import React from 'react';
import Login from './components/login'
import Register from './components/register';
import Home  from './components/home';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import { Context } from './context';
import { useState } from 'react';
import axios from 'axios';
import ErrorBoundary from './errorBoundary';




function App() {
 
  return (
    
    <div className="App">
    <ErrorBoundary>
    <BrowserRouter>
    <Routes>
     
      <Route  path="/" element={<Login/>}/>
      <Route  path="/register" element={<Register/>}/>
      <Route  path="/Home" element={ <Home/>}/>
    </Routes>
    </BrowserRouter>
    </ErrorBoundary>
   
    </div>
    
  );
}

export default App;
