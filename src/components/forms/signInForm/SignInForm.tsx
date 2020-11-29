import React, { ChangeEvent, FormEvent } from 'react';
import BButton from 'react-bootstrap/Button';
import BForm from 'react-bootstrap/Form';
import './SignInForm.css';

interface SignInFormState {
    login: string;
    password: string;
    invalidLogin: boolean;
}

interface SignInFormProps {
    onSubmit: (datas: {login: string, password: string}) => boolean
}

export default class SignInForm extends React.Component<SignInFormProps, SignInFormState> {
    constructor(props: SignInFormProps){
        super(props)
        this.state = {
            login: '',
            password: '',
            invalidLogin: false
        };

        this.loginHandler = this.loginHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.formInvalid = this.formInvalid.bind(this);
    }

    loginHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            login: event.target.value ?? ''
        })
    }

    passwordHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            password: event.target.value ?? ''
        })
    }

    formInvalid = ()  => this.state.login === '' || this.state.password === '';

    onSubmit(event: FormEvent){
        event.preventDefault();
        if (this.formInvalid())
            return;
        let datas = {
            login: this.state.login,
            password: this.state.password
        }
        this.setState({
            invalidLogin: !this.props.onSubmit(datas)
        });
    }

    render() {
        return (
            <BForm onSubmit={this.onSubmit}>
                
                <BForm.Row>
                    {
                        this.state.invalidLogin ?
                        <p className="errorMessage">Invalid login and/or password!</p>
                        : null
                    }
                </BForm.Row>
                <BForm.Row>
                    <BForm.Group controlId="login" >
                        <BForm.Label>Login :</BForm.Label>
                        <BForm.Control
                            type="text"
                            placeholder="Enter login"
                            value={this.state.login}
                            onChange = {this.loginHandler}
                        />
                    </BForm.Group>
                </BForm.Row>
                <BForm.Row>
                    <BForm.Group controlId="password">
                        <BForm.Label>Password :</BForm.Label>
                        <BForm.Control
                            type="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange = {this.passwordHandler}
                        />
                    </BForm.Group>
                </BForm.Row>
                <BForm.Row>
                    <BButton
                    type="submit"
                    disabled={this.formInvalid()}
                >
                    Se Connecter !
                    </BButton>
                </BForm.Row>
            </BForm>
        );
    }
}