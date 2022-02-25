import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'; 
import baizhu from '../../assets/Images/baizhu.png';
import ayato from '../../assets/Images/ayato.png';
import tartar from '../../assets/Images/tartar.png';
import shenhedone from '../../assets/Images/shenhedone.png';

export default class Cards extends React.Component{

    render() {

        return <div class="container card-group">
        <div class="card">
          <img src={baizhu} class="card-img-top" alt="baizhu" />
          <div class="card-body">
            <h5 class="card-title">Baizhu</h5>
          </div>
        </div>
        <div class="card">
          <img src={ayato} class="card-img-top" alt="ayato" />
          <div class="card-body">
            <h5 class="card-title">Ayato</h5>
          </div>
        </div>
        <div class="card">
          <img src={shenhedone} class="card-img-top" alt="shenhedone" />
          <div class="card-body">
            <h5 class="card-title">Shenhe</h5>
          </div>
        </div>
        <div class="card">
          <img src={tartar} class="card-img-top" alt="tartar" />
          <div class="card-body">
            <h5 class="card-title">Tartaglia</h5>
          </div>
        </div>
      </div>

    }
}