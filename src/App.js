import './App.css';
import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from './Components/Navibar';
import {
    BrowserRouter as Router,
    Route,
    Routes,//==Switch in 'react-router-dom' v6
    Link
} from 'react-router-dom';
import Articles from './Articles';
import News from './News';
import Help from './Help';



function App ()  {
  return (
      <>
          <header>
              <NaviBar />
          </header>
          <body>
              <Router>
                  <Routes>
                      <Route exact path="/" element={<Articles/>} />
                      <Route path="/news" element={<News/>} />
                      <Route path="/help" element={<Help/>} />
                  </Routes>
              </Router>
          </body>
    </>
  );
}

export default App;
