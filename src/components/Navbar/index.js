import React from 'react';
import { ApiContext } from "../../api/api";
import { Link } from 'react-router-dom';

import './style.scss';

import Guest from '../../api/Guest';
import LoginRequired from '../../api/LoginRequired';

export default class Navbar extends React.Component {

  static contextType = ApiContext;

  constructor(props) {
    super(props);
    this.state = {
      toggleNav: false,
      loginError: null,
      signupError: null,
      email: '',
      password: '',
      name: '',
      confpassword: '',
      userData: null,
    };
  }

  handleEmailChange = (event) => { this.setState({ email: event.currentTarget.value }) };
  handleNameChange = (event) => { this.setState({ name: event.currentTarget.value }) };
  handlePasswordChange = (event) => { this.setState({ password: event.currentTarget.value }) };
  handleConfPasswordChange = (event) => { this.setState({ confPassword: event.currentTarget.value }) };

  handleSignup = async () => {
    const { name, email, password, confPassword } = this.state;
    if (name.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      confPassword.trim() !== '') {
      if (password !== confPassword) {
        alert("passwords doesn't match")
        return false;
      }
      else {
        try {
          await this.context.signup(name, email, password);
          this.setState({
            signupError: null,
            name: '',
            email: '',
            password: '',
          })
        } catch (exception) {
          this.setState({ signupError: exception.message });
        }
      }
    }
  };


  handleLogin = async () => {

    const { email, password } = this.state;

    if (email.trim() !== '' && password.trim() !== '') {
      try {
        await this.context.login(email, password);

        this.setState({
          loginError: null,
          email: '',
          password: '',
        })

      } catch (exception) {
        this.setState({ loginError: exception.message });
      }
    }
  };


  toggleNav = () => {
    const { toggleNav } = this.state;

    this.setState({
      toggleNav: !toggleNav,
    });
  };


  render() {
    let navClass = "collapse navbar-collapse";

    const { toggleNav } = this.state;

    if (toggleNav) {
      navClass += " show"
    }

    return <nav className="navbar navbar-expand-lg navbar-light main-navbar">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={this.toggleNav} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <p className="navbar-brand">DIKO-CHAN</p>
        <div className={navClass} id="navbarSupportedContent">
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


        <Guest>
          {/* Sign up, Login buttons */}
                <ul className="nav buttons-navbar-nav navbar-right">
            <a className="btn btn-outline-light btn-floating m-1" data-bs-toggle="modal" data-bs-target="#signupmodal" role="button">
              <i className="fas fa-user-plus"></i></a>
            <a className="btn btn-outline-light btn-floating m-1" data-bs-toggle="modal" data-bs-target="#loginmodal" role="button">
              <i className="fas fa-sign-in-alt"></i></a>
          </ul>
        </Guest>

        <LoginRequired>
          <button className='btn btn-outline-light btn-floating'
            onClick={this.context.logout}>
            <i className="fas fa-sign-in-alt me-2"></i>Logout
          </button>
        </LoginRequired>


        {/* Sign up modal */}
        <div className="modal fade" id="signupmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Sign Up</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                <form>
                  <div className="mb-2">
                    <label htmlFor="signup-name-input" className="form-label">Nick name</label>
                    <input type="text" onInput={this.handleNameChange} className="form-control" />
                    <div />
                    <div className="mb-2">
                      <label htmlFor="signup-email-input" className="form-label">Email address</label>
                      <input type="email" onInput={this.handleEmailChange}
                        className="form-control" id="signup-email-input" aria-describedby="emailHelp" />
                    </div>
                    <div className="row">
                      <div className="mb-2 col">
                        <label htmlFor="signup-password-input" className="form-label">Password</label>
                        <input type="password" autoComplete='off' onInput={this.handlePasswordChange}
                          className="form-control" id="signup-password-input" />
                      </div>
                      <div className="mb-2 col">
                        <label htmlFor="signup-confirm-password-input" className="form-label">Confirm Password</label>
                        <input type="password" autoComplete='off' onInput={this.handleConfPasswordChange}
                          className="form-control" id="signup-confirm-password-input" />
                      </div>
                    </div>
                    <button type="button" onClick={this.handleSignup} className="btn btn-outline-dark">
                      <i className="fas fa-user-plus"></i> Sign up</button>
                    {this.state.signupError ? <p>{this.state.signupError}</p> : null}
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <p>Already have an account? Try to Login</p>
              </div>
            </div>
          </div>
        </div>

        {/* Login modal */}
        <div className="modal fade" id="loginmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Login</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="login-email-input" className="form-label">Email address</label>
                    <input type="email" onInput={this.handleEmailChange}
                      className="form-control" id="login-email-input" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="login-password-input" className="form-label">Password</label>
                    <input type="password" autoComplete='off' onInput={this.handlePasswordChange}
                      className="form-control" id="login-password-input" />
                  </div>
                  <button type="button" onClick={this.handleLogin} className="btn btn-outline-dark">
                    <i className="fas fa-sign-in-alt"></i> Login</button>
                  {this.state.loginError ? <p>{this.state.loginError}</p> : null}
                </form>
              </div>

              <div className="modal-footer">
                <p>Don't have an account? Try to <a data-bs-target="#signupmodal">Sign up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  }
}