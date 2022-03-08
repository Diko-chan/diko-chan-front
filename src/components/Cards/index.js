import React from 'react';

import './style.scss'; 

import baizhu from '../../assets/Images/baizhu.png';
import ayato from '../../assets/Images/ayato.png';
import tartar from '../../assets/Images/tartar.png';
import shenhedone from '../../assets/Images/shenhedone.png';

export default class Cards extends React.Component{

    render() {

        return <div className="container card-group">
        <div className="card">
          <img src={baizhu} class="card-img-top" alt="baizhu" />
        </div>
        <div className="card">
          <img src={ayato} class="card-img-top" alt="ayato" />
        </div>
        <div className="card">
          <img src={shenhedone} class="card-img-top" alt="shenhedone" />
        </div>
        <div className="card">
          <img src={tartar} class="card-img-top" alt="tartar" />
        </div>
      </div>

    }
}