import React from 'react';
import Form  from 'react';
import LoginRequired from '../../api/LoginRequired';

import './style.scss'; 

export default class Commission extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            commissionError: null,
            name: '',
            age: '',
            gender: '',
            details: '',
        };
    }

    handleComNameChange = (event) => { this.setState({ com_name: event.currentTarget.value }) };
    handleComAgeChange = (event) => { this.setState({ com_age: event.currentTarget.value }) };
    handleComGenderChange = (event) => { this.setState({ com_gender: event.currentTarget.value }) };
    handleComDetailsChange = (event) => { this.setState({ com_details: event.currentTarget.value }) };

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
            
            <LoginRequired>
            <div className="card between commission-container">
                <div className="mb-3 input-group col-auto">
                    <span className="input-group-text" id="addon-wrapping" required>Name</span>
                        <input className="form-control" type="text"  aria-label="default input example" onChange={(value)=>{this.com_name = value}}/> 
                </div>
                <div className="row">
                    <div className="mb-3 input-group flex-nowrap col">
                    <span className="input-group-text" id="addon-wrapping">Age</span>
                        <input className="form-control" type="number" aria-label="default input example" onChange={(value)=>{this.com_age = Number(value)}} />   
                    </div>
                    <div className="mb-3 input-group flex-nowrap col">
                        <span className="input-group-text" id="addon-wrapping" required>Gender</span>        
                        <select className="form-select" aria-label="Default select example" onChange={(value)=>{this.com_gender = value}}>               
                            <option value="unknown">Unknown</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                 </div>
                
                <div className="mb-3 input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Details</span>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(value)=>{this.com_details = value}}></textarea>
                </div>
                {/* <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" required />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                </div> */}
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        You accept and read the rules
                    </label>
                    <div className="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-secondary" type="submit" >Submit Commission</button>
                </div>
            </div>
            </LoginRequired>

        </div>
    }

}
