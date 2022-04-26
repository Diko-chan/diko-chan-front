import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import welcome from '../../assets/Images/itsmewelcome.png';

export default class Welcome extends React.Component{

    render() {
        return <div className="card-group">
                <div className="card between image-container ">
                    <img src={welcome} className="img-responsive" alt="welcome" />
                </div>
                <div className="card between aboutmetext ">  
                    <h3>WELCOME!</h3><br/>

                    <p>My name is Diko-chan, I'm a freelance digital illustrator who also likes to play a lot.<br/>
                        Also, I'm streaming on Twitch as a Vtuber, mostly my art stuff, sometimes games.<br/>
                        My Vtuber is a confy, Fox type kemonomimi<br/>
                        If you want to see me draw or just talk with me, feel free to hop in.<br/>
                        <br/>

                        I'm graduated as a Representative Artist, and studying webdevelopment.<br/></p>
                </div>
            </div>
    }
}