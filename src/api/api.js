import { Component, createContext } from "react";

export const ApiContent = createContext({
    apiToken: null,
});

export class ApiProvider extends Component {   
    constructor(props) {
        super(props);

        this.state = {};
    } 

    render() {
        return <ApiContent.Provider value={this.state}>
            {this.props.children}
        </ApiContent.Provider>
    }

}