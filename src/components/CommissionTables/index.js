import React from 'react';
import { ApiContext } from "../../api/api";

import './style.scss';

export default class Commission extends React.Component {

    static contextType = ApiContext;

    constructor(props) {
        super(props);

        this.state = {
            commissionData: [],
        };
    };


    commissionList(commissions) {
        console.debug(commissions);

        const commissionData = commissions.data.map(elem => {
            return {
                id: elem.id,
                comName: elem.com_name,
                comAge: elem.com_age,
                comGender: elem.com_gender,
                comDetails: elem.com_details,
                comStatus: elem.com_status,
            };
        });

        this.setState({
            commissionData: commissionData,
        })
    }


    componentDidMount() {
        this.context.getCommission().then(commissions => {
            this.commissionList(commissions);
        })
    }


    render() {
        return <div className="card-group container">
            <div className="card between rules-container">
                <div className="card-body">
                    <h1>My Commissions</h1>
                </div>
            </div>

            <div className="card between commission-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.commissionData.map((data, index) => {
                            return (
                                
                                <tr key={index}>                                   
                                    <td>{data.comName}</td>
                                    <td>{data.comAge}</td>
                                    <td>{data.comGender}</td>
                                    <td>{data.comDetails}</td>
                                    <td>{data.comStatus}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}
