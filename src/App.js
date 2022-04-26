import './App.scss';

import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Artworks from './components/Artworks'
import Commission from './components/Commission';
import CommissionTables from './components/CommissionTables';
import Commission_notloggedin from './components/CommissionNotLoggedin';
import Contactme from './components/Contactme';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import LoginRequired from './api/LoginRequired';




class App extends React.Component {


  render() {
    return (
      <div className="App">
        
          <Routes>
            <Route path='/' element={
              <>
              <Navbar />
              <Cards />
              <Welcome />
              <Footer />
              </>
            } />

            <Route>
              <Route path='/artworks' element={
                <>
                <Navbar />
                <Artworks />
                <Footer />
                </>
              } />
            </Route>

            <Route path='/contactme' element={
              <>
              <Navbar />
              <Cards />
              <Contactme />
              <Footer />
              </>
            } />
            
              <Route path='/commission' element={
                <>
                <Navbar />
                <Cards />
                  <Commission />
                  <LoginRequired>
                    <CommissionTables />
                  </LoginRequired>
                <Footer />
                </>
              } />

          </Routes>
            
    </div>
    )
  }
}

export default App;
