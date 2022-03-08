import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss'; 


export default class Navbar extends React.Component{

    render() {
        return <nav className="navbar navbar-expand-lg navbar-light main-navbar">
        <div className="container-fluid">
          <p className="navbar-brand">DIKO-CHAN</p>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/artworks">ARTWORKS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/commission">COMMISSION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactme">CONTACT ME</Link>
              </li>
            </ul>
          </div>
          
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous" />
            <ul className="nav navbar-nav navbar-right">
              <a className="btn btn-outline-light btn-floating m-1" href="http://127.0.0.1:8000/register" role="button">
              <i className="fas fa-user-plus"></i> Sign Up</a>
              <a className="btn btn-outline-light btn-floating m-1" href="http://127.0.0.1:8000/login" role="button">
              <i className="fas fa-sign-in-alt"></i> Login</a>
            </ul>         
        </div>
      </nav>
    }

}