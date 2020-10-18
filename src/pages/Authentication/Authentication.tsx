import React from 'react';
import SignUpForm from '../../components/forms/signUp';
import User from '../../models';
import { LogingService } from '../../services/LogingService';

import './Authentication.css';

export default class Authentication extends React.Component<{history: any}> {
    loginService: LogingService;

    constructor(props: {history: any}) {
        super(props);
        this.loginService = new LogingService();

        this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
    }

    onSignUpSubmit(datas: User) {
        this.loginService.register(datas)
            .then((result: number) => {
                this.props.history.push(`/profile/${result}`);
            })
            .catch(err => alert("An Error has Occured, please try again later"));
    }
    
    render() {
        return (
            <SignUpForm onSignup={this.onSignUpSubmit}/>
        )
    }
}