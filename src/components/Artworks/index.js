import React from 'react';

import './style.scss';

import baizhu from '../../assets/Images/baizhu.png';
import ayato from '../../assets/Images/ayato.png';
import tartar from '../../assets/Images/tartar.png';
import shenhedone from '../../assets/Images/shenhedone.png';
import silvervalefanart from '../../assets/Images/silvervalefanart.png';
import winterme4 from '../../assets/Images/winterme4.png';
import yaeyae from '../../assets/Images/yaeyae.png';
import adultgoroudone from '../../assets/Images/adultgoroudone.png';
import albedo from '../../assets/Images/albedo.png';
import covenahri from '../../assets/Images/covenahri.jpg';
import bunny from '../../assets/Images/bunny.png';
import chibivex from '../../assets/Images/chibivex.jpg';
import commff14 from '../../assets/Images/commff14.png';
import cutiesoraka from '../../assets/Images/cutiesoraka.png';
import dilucat from '../../assets/Images/dilucat.png';
import Ganyuanyu from '../../assets/Images/Ganyuanyu.jpg';
import Itto from '../../assets/Images/Itto.png';
import kokomichibi from '../../assets/Images/kokomichibi.jpg';
import kokominormo from '../../assets/Images/kokominormo.png';
import kujosarah from '../../assets/Images/kujosarah.png';
import lilu2 from '../../assets/Images/lilu2.jpg';
import maidthoma from '../../assets/Images/maidthoma.png';
import nami from '../../assets/Images/nami.png';
import sayuchibi from '../../assets/Images/sayuchibi.png';

export default class Arworks extends React.Component {

    constructor(props) {
        super(props);

        this.state={};
    };

    render() {
        return <div className="container-artwork">             
                    <div className="">
                        <div className="row-artwork">
                            <div className="column-artwork col-sm-3">
                            <img src={silvervalefanart} className="card-img-top" alt="Silvervale" />
                            <img src={baizhu} className="card-img-top" alt="baizhu" />
                            <img src={ayato} className="card-img-top" alt="ayato" />
                            <img src={tartar} className="card-img-top" alt="tartar" />
                            <img src={Itto} className="card-img-top" alt="Itto" />
                            <img src={kokomichibi} className="card-img-top" alt="kokomichibi" />
                            </div>
                            <div className="column-artwork col-sm-3">
                            <img src={winterme4} className="card-img-top" alt="winterme4" />
                            <img src={shenhedone} className="card-img-top" alt="shenhedone" />
                            <img src={albedo} className="card-img-top" alt="albedo" />
                            <img src={covenahri} className="card-img-top" alt="covenahri" />
                            <img src={kokominormo} className="card-img-top" alt="kokominormo" />
                            <img src={kujosarah} className="card-img-top" alt="kujosarah" />
                            </div>
                            <div className="column-artwork col-sm-3">
                            <img src={yaeyae} className="card-img-top" alt="yaeyae" />
                            <img src={bunny} className="card-img-top" alt="bunny" />
                            <img src={chibivex} className="card-img-top" alt="chibivex" />
                            <img src={commff14} className="card-img-top" alt="commff14" />
                            <img src={lilu2} className="card-img-top" alt="lilu2" />
                            <img src={maidthoma} className="card-img-top" alt="maidthoma" />
                            </div>
                            <div className="column-artwork col-sm-3">
                            <img src={adultgoroudone} className="card-img-top" alt="adultgoroudone" />
                            <img src={cutiesoraka} className="card-img-top" alt="cutiesoraka" />
                            <img src={dilucat} className="card-img-top" alt="dilucat" />
                            <img src={Ganyuanyu} className="card-img-top" alt="Ganyuanyu" />
                            <img src={nami} className="card-img-top" alt="nami" />
                            <img src={sayuchibi} className="card-img-top" alt="sayuchibi" />
                            </div>
                        </div>
                    </div>
                 </div>
      
    }

}
