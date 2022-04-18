import React from 'react';

import './style.scss'; 

export default class Footer extends React.Component{

    render() { 
        
        return <footer className="main-footer text-center ">
        <div className="container p-4">  
          <section className="mb-4">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossOrigin="anonymous" />
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/officialdikochan/" role="button" rell="noreferrer" target="_blank"
              ><i className="fab fa-facebook-f">
            </i></a>
  
            <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/Diko__chan" role="button" rell="noreferrer" target="_blank"
              ><i className="fab fa-twitter">
            </i></a>
 
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/dikochanart" role="button" rell="noreferrer" target="_blank"
              ><i className="fab fa-instagram">
            </i></a> 

            <a className="btn btn-outline-light btn-floating m-1" href="https://www.deviantart.com/diko-chan" role="button" rell="noreferrer" target="_blank"
              ><i className="fab fa-deviantart">
            </i></a>    
          </section>
          <section className="mb-4">
            <p>
              I really appreciate your visit here, I hope you are doing fine.<br/>
              Here are some links for my social pages~
            </p>
          </section>
        </div>
      </footer>
    }
}