import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import "./Login.css";



class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.state.handleSubmit}>
                    <FormGroup controlId="email" size="lg">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={e => this.setState.email = e.target.value }
                        />
                    </FormGroup>
                    <FormGroup controlId="password" size="lg">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={e => this.setState.password = e.target.value }
                            type="password"
                        />
                    </FormGroup>
                    <Button block size="lg" disabled={!this.validateForm()} type="submit">
                        Login
        </Button>
                </form>
            </div>
        );
    }
}


export default Login;