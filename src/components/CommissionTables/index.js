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
                    <h1>My Commissions</h1>                   
                </div>
            </div>
            <div className="card between commission-container">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Details</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            

        </div>
    }

}
