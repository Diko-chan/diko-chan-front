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
                <div class="card-body">
                    <h1>RULES</h1>
                    <p>This is some text within a card body.</p>
                    <p>This is some text within a card body.</p>
                    <p>This is some text within a card body.</p>
                    <p>This is some text within a card body.</p>
                    <p>This is some text within a card body.</p>
                    <p>This is some text within a card body.</p>
                    
                </div>
            </div>
            <div className="card between commission-container">
                <div className="mb-3 input-group col-auto">
                    <span className="input-group-text" id="addon-wrapping" required>Name</span>
                        <input className="form-control" type="text" placeholder=" " aria-label="default input example" /> 
                </div>
                <div className="mb-3 input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Age</span>
                        <input className="form-control" type="number" placeholder="just numbers" aria-label="default input example" /> 
                </div>
                <div className="mb-3 input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping" required>Gender</span>        
                        <select className="form-select" aria-label="Default select example">               
                        <option selected>Unknown</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other, Please describe in the details</option>
                    </select>
                </div>
                <div className="mb-3 input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Details</span>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <div className="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02" required />
                    <label className="input-group-text" for="inputGroupFile02">Upload</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label class="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit" >Submit Commission</button>
                </div>
            </div>
            

        </div>
    }

}
