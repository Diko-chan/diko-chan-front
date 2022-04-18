import { Component, createContext } from "react";

export const ApiContext = createContext({
    apiToken: null,
    networkError: false,
    login: (email, password) => {},
    
});

export class ApiProvider extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            apiToken: '',
            networkError: false,
            login: this.login,
        };
    } 

    componentDidMount() {
        const token = window.localStorage.getItem('authToken');
        if (token) {
            this.setState({ apiToken: token });
        }
    }


    async fetchApi(endpoint, method = 'GET', data = null) {
        try {
            const response = await fetch(`${this.props.serverAddress}/api/${endpoint}`, {
                method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': this.state.apiToken ? `Bearer ${this.state.apiToken}` : null,
                },
                body: data ? JSON.stringify(data) : null,
            });
            this.setState({ networkError: false });
            return response;
        } catch(exception) {
            this.setState({ networkError: true });
        }
    }

    login = async (email, password) => {
        console.log(email, password);
        const response = await this.fetchApi('login', 'POST', { email, password });
        const data = await response.json();

        console.log(data);

        if (!data.message) {
            throw new Error(data.message);
        } else {
            window.localStorage.setItem('authToken', data.data.token);
            this.setState({apiToken: data.data.token});

            console.log("Sikeres bejelentkezés!");
            console.log("userType: " + data.data.userType);
            console.log("user Token: " + this.state.apiToken);
        }
    }


    render() {
        return <ApiContext.Provider value={this.state}>
            {this.props.children}
        </ApiContext.Provider>
    }
}