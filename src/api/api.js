import { Component, createContext } from "react";

export const ApiContext = createContext({
    apiToken: null,
    networkError: false,
    login: (email, password) => { },
    getCommission: () => { },

});

export class ApiProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiToken: '',
            networkError: false,
            login: this.login,
            logout: this.handleLogout,
            signup: this.signup,
            commission: this.commission,
            getCommission: this.getCommission,
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
        } catch (exception) {
            this.setState({ networkError: true });
        }
    }

    login = async (email, password) => {
        console.log(email);
        const response = await this.fetchApi('login', 'POST', { email, password });
        const data = await response.json();

        console.log(data);

        if (!data.message) {
            throw new Error(data.message);
        } else {
            window.localStorage.setItem('authToken', data.data.token);
            this.setState({ apiToken: data.data.token });

            console.log("Successful login!");
        }
        this.forceUpdate();
    }


    signup = async (name, email, password) => {
        const response = await this.fetchApi('register', 'POST', { name, email, password });
        console.log(response);

        if (response.status > 299) {
            throw new Error(response.message);
        } else {
            const data = await response.json();
            window.localStorage.setItem('authToken', data.data.token);
            this.setState({ apiToken: data.data.token });

            console.log("successful register!");
        }
    }


    commission = async (com_name, com_age, com_gender, com_details) => {
        console.log(com_name, com_age, com_gender, com_details);

        const response = await this.fetchApi('commissions', 'POST', { com_name, com_age, com_gender, com_details });
        console.log(response);
    }


    getCommission = async () => {
        //const response = await this.fetchApi('commission');
        const response = await fetch(`${this.props.serverAddress}/api/commission`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.state.apiToken}`,
            },
        });


        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const commissionList = await response.json();

        if (response.message) {
            this.setState({
                networkError: false,
            })
        }

        console.debug(commissionList);
        return commissionList;
    }

    handleLogout = () => {
        this.setState({ apiToken: null });
        window.localStorage.clear();
    };

    render() {
        return <ApiContext.Provider value={this.state}>
            {this.props.children}
        </ApiContext.Provider>
    }
}