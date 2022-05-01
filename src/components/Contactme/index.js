import React from 'react';
import bongome4 from '../../assets/Images/bongome4.gif';

import './style.scss'; 

export default class Contactme extends React.Component {

    render() {
        return <div className="card-group">
        <div className="card between image-container ">
            <img src={bongome4} className="img-responsive" alt="bongome4" />
        </div>
        <div className="card between contactmetext ">  
            <h3>HEY THERE~</h3><br/>

            <p>My name is Diko-chan, I'm a freelance digital illustrator who also likes to play a lot.<br/>
                Also, I'm streaming on Twitch as a Vtuber, mostly my art stuff, sometimes games.<br/>
                My style is fluid, depends the mood and the type I'm drawing or the music I listen.<br/><br/>

                I'm graduated as a Representative Artist, and studying webdevelopment.<br/>
                You can contact me any time via email dikochanart@gmail.com <br/>

                I'm making this page as a graduation project for school and for my own reklam.</p>
        </div>
    </div>
    }
}