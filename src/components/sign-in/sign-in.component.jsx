import React, {Component} from 'react';

import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomeButton from "../custom-button/custom-button.component";

class SignInComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        console.log({e});
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (e) => {
        console.log({target: e.target});
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have and account</h2>
                <span>Sign in with your email and password</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput type="text"
                               name="email"
                               value={this.state.email}
                               handleChange={this.handleChange}
                               lable='email'
                               required/>


                    <FormInput type="password"
                               name="password"
                               value={this.state.password}
                               handleChange={this.handleChange}
                               lable='password'
                               required/>


                    <CustomeButton type="submit">Sign in</CustomeButton>
                </form>
            </div>
        )
    }
}

export default SignInComponent;
