import React from 'react';
import Form  from 'react';

import './style.scss'; 

export default class Commission extends React.Component {

    constructor(props) {
        super(props);

        this.state={};
    };

    render() {
        return <div className="card-group">
            <div className="card between rules-container">
                <div className="card-body">
                <h1>RULES</h1>
                    <p>Be patient, I have to read every details you gave me. <br/>
                    Won't accept COMMISSIONs which are not really specific like, "draw me a cat", give me more details, don't be scared.</p>
                    <p>Check your commission status regularly.</p>
                    <p>If you can't upload a reference picture, then give a well-written details about everything, clothes, face, bodytype etc.</p>
                    <p>Don't give me backstory of the character, only if it has anything with the expressions and details.</p>
                    <p>Paying upfront the first half, after the sketch is done.<br/>
                     After finishing the commission, you have to send me the other half, then I will send you the high-res pic of it in email.
                        If you decide to going back after the sketch or in any phase after paying the first half, there is no payback option from that.
                        The first-half upfront paying is defending me as I took my time making it.</p>
                    
                </div>
            </div>
            <div className="card between commission-container">
                <div className="card-body">
                    
                    <p>This field is only available for those who logged in.</p>
                    <p>Thank you for your understanding</p>
                    
                </div>
            </div>
            
            
            

        </div>
    }

}
