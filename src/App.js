import './App.scss';

import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Artworks from './components/Artworks'
import Commission from './components/Commission';
import Contactme from './components/Contactme';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import { Route, Routes } from 'react-router-dom';




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={
            <>
            <Navbar></Navbar>
            <Cards></Cards>
            <Welcome></Welcome>
            <Footer></Footer>
            </>
           } />

          <Route>
            <Route path='/artworks' element={
              <>
              <Navbar></Navbar>
              <Artworks></Artworks>
              <Footer></Footer>
              </>
            } />
          </Route>

          <Route path='/contactme' element={
            <>
            <Navbar></Navbar>
            <Cards></Cards>
            <Contactme></Contactme>
            <Footer></Footer>
            </>
           } />

          <Route path='/commission' element={
            <>
            <Navbar></Navbar>
            <Cards></Cards>
            <Commission></Commission>
            <Footer></Footer>
            </>
           } />
        </Routes>      
    </div>
    )
  }
}

export default App;
