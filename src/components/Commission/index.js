import React from 'react';
import { ApiContext } from "../../api/api";
import LoginRequired from '../../api/LoginRequired';

import './style.scss';

export default class Commission extends React.Component {

    static contextType = ApiContext;

    constructor(props) {
        super(props);

        this.state = {
            commissionError: null,
            com_name: '',
            com_age: '',
            com_gender: '',
            com_details: '',
        };
    }

    handleComNameChange = (event) => { this.setState({ com_name: event.currentTarget.value }) };
    handleComAgeChange = (event) => { this.setState({ com_age: event.currentTarget.value }) };
    handleComGenderChange = (event) => { this.setState({ com_gender: event.currentTarget.value }) };
    handleComDetailsChange = (event) => { this.setState({ com_details: event.currentTarget.value }) };

    handleCommission = async () => {
        const { com_name, com_age, com_gender, com_details } = this.state;
        if (com_name.trim() !== '' &&
            com_age.trim() !== '' &&
            com_gender.trim() !== '' &&
            com_details.trim() !== '') {

            try {
                await this.context.commission(com_name, com_age, com_gender, com_details);
                this.setState({
                    commissionError: null,
                    com_name: '',
                    com_age: '',
                    com_gender: '',
                    com_details: '',
                })
            }
            catch (exception) {
                this.setState({ commissionError: exception.message });
            }
        }
    };


    render() {
        const { com_name, com_age, com_gender, com_details } = this.state;

        return <div className="card-group container">
            <div className="card between rules-container">
                <div className="card-body">
                    <h1>RULES</h1>
                    <p>Be patient, I have to read every details you gave me. <br />
                        Won't accept commissions, which are not really specific like, "draw me a cat", give me more details, don't be scared.</p>
                    <p>Check your commission status regularly. <br />
                        0 - under checking<br />
                        1 - accepted<br />
                        2 - sent for review<br />
                        3 - waiting for payment<br />
                        4 - finished<br />
                    </p>
                    <p>If you can't upload a reference picture, then give a well-written details about everything, clothes, face, bodytype etc.</p>
                    <p>Don't give me backstory of the character, only if it has anything with the expressions and details.</p>
                    <p>Paying upfront the first half, after the sketch is done.<br />
                        After finishing the commission, you have to send me the other half, then I will send you the high-res pic of it in email.
                        If you decide to going back after the sketch or in any phase after paying the first half, there is no payback option from that.
                        The first-half upfront paying is defending me as I took my time making it.</p>
                    <p>If you run into any problem please write me a letter via email dikochanart@gmail.com </p>
                </div>
            </div>

            <LoginRequired>
                <div className="card between commission-container mt-auto mb-auto">
                    <div className="mb-3 input-group col-auto">
                        <span className="input-group-text" id="addon-wrapping" required>Name</span>
                        <input className="form-control" type="text" aria-label="default input example" value={com_name} onInput={this.handleComNameChange} />
                    </div>
                    <div className="row">
                        <div className="mb-3 input-group flex-nowrap col">
                            <span className="input-group-text" id="addon-wrapping">Age</span>
                            <input className="form-control" type="number" aria-label="default input example" value={com_age} onInput={this.handleComAgeChange} />
                        </div>
                        <div className="mb-3 input-group flex-nowrap col">
                            <span className="input-group-text" id="addon-wrapping" required>Gender</span>
                            <select className="form-select" aria-label="Default select example" value={com_gender} onInput={this.handleComGenderChange}>
                                <option value="unknown">Unknown</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Details</span>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={com_details} onInput={this.handleComDetailsChange}></textarea>
                    </div>
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
                        <button className="btn btn-secondary" type="submit" onClick={this.handleCommission}
                        >Submit Commission</button>
                        {this.state.commissionError ? <p>{this.state.commissionError}</p> : null}
                    </div>
                </div>
            </LoginRequired>
        </div>
    }
}
