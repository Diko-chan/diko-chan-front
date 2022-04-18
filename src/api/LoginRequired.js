import React from "react";
import { ApiContext } from "./api";

import Commission_notloggedin from '../components/CommissionNotLoggedin';

export default class LoginRequired extends React.Component {
    static contextType = ApiContext;

    render() {
        if (this.context.apiToken) {
            return this.props.children;
        } else {
            return null;
        }
    }
}