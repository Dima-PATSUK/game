import './App.css';
import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from './Components/Navibar';
import {Routes,} from 'react-router-dom';
import {Route,} from 'react-router-dom';


import {Articles} from './Articles';
import {News} from './News';
import {Help} from './Help';



function App ()  {
  return (
    <>
    <header>
        <NaviBar />
    </header>
      <body>
    
    
      <Routes>

      <Route exact path="/" element={Articles }/>
      <Route path="/news" element={News }/>
      <Route path="/help" element={Help }/>
      
      
      </Routes>
      </body>
    </>
  );
}

export default App;
