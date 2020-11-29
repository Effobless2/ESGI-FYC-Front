import React, { ChangeEvent, FormEvent } from 'react';
import BButton from 'react-bootstrap/Button';
import BForm from 'react-bootstrap/Form';
import { User } from '../../../models/User';
import './SignUpForm.css';

interface AuthenticationState {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    confirmPassord: string;
}

interface SignUpProp {
    onSignup: (datasRegistration: User) => any;
    user?: User;
}


export default class AuthenticationForm extends React.Component<SignUpProp, AuthenticationState> {
    constructor(props: SignUpProp){
        super(props);
        if (props.user) {
            this.state = {
                email: props.user!.email,
                firstname: props.user!.firstName,
                lastname: props.user!.lastName,
                password: '',
                confirmPassord: ''
            }
        }
        else {
            this.state = {
                email: '',
                firstname: '',
                lastname: '',
                password: '',
                confirmPassord: ''
            };
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.isValidState = this.isValidState.bind(this);
        this.emailOnChangeHandler = this.emailOnChangeHandler.bind(this);
        this.lastnameOnChangeHandler = this.lastnameOnChangeHandler.bind(this);
        this.passwordOnChangeHandler = this.passwordOnChangeHandler.bind(this);
        this.firstnameOnChangeHandler = this.firstnameOnChangeHandler.bind(this);
        this.confirmPasswordOnChangeHandler = this.confirmPasswordOnChangeHandler.bind(this);
    }
    render() {
        return (
            <BForm onSubmit={this.handleSubmit}>

                <BForm.Row>
                    <BForm.Group controlId="formBasicEmail">
                        <BForm.Label>Email address :</BForm.Label>
                        <BForm.Control
                            type="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.emailOnChangeHandler}
                            required={true}
                            disabled={this.props.user !== undefined}
                        />
                    </BForm.Group>
                </BForm.Row>

                <BForm.Row>
                    <BForm.Group controlId="formBasicFirstName">
                        <BForm.Label>Firstname : </BForm.Label>
                        <BForm.Control
                            type="text"
                            placeholder="Enter your firstname"
                            value={this.state.firstname}
                            onChange={this.firstnameOnChangeHandler}
                            required={true}
                        />
                    </BForm.Group>
                    
                    <BForm.Group controlId="formBasicLastName">
                        <BForm.Label>Lastname : </BForm.Label>
                        <BForm.Control
                            type="text"
                            placeholder="Enter your lastname"
                            value={this.state.lastname}
                            onChange={this.lastnameOnChangeHandler}
                            required={true}
                        />
                    </BForm.Group>
                </BForm.Row>

                <BForm.Row>
                    <BForm.Group controlId="formBasicPassword">
                        <BForm.Label>Password : </BForm.Label>
                        <BForm.Control 
                            type="password"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={this.passwordOnChangeHandler}
                            required={this.props.user === undefined}
                        />
                    </BForm.Group>

                    <BForm.Group controlId="formBasicConfirmPassword">
                        <BForm.Label>Confirm Password : </BForm.Label>
                        <BForm.Control 
                            type="password"
                            placeholder="Confirm your password"
                            value={this.state.confirmPassord}
                            onChange={this.confirmPasswordOnChangeHandler}
                            required={this.props.user === undefined || this.state.password !== ''}
                            isValid={
                                this.state.password === this.state.confirmPassord
                            }
                        />
                    </BForm.Group>
                </BForm.Row>

                <BForm.Row>
                    <BButton
                    type="submit"
                    disabled={!this.isValidState()}
                >
                    Submit
                </BButton>
                </BForm.Row>
            </BForm>
        )
    }

    handleSubmit(event: FormEvent){
        event.preventDefault();
        if(this.isValidState())
            this.props.onSignup({
                firstName: this.state.firstname,
                lastName: this.state.lastname,
                email: this.state.email,
                password: this.state.password
            });
        
    }

    isValidState(): boolean {
        if (this.state.email === '')
            return false;
        if (this.state.firstname === '')
            return false;
        if (this.state.lastname === '')
            return false;
        if ((this.state.password === '' && !this.props.user) || this.state.password !== this.state.confirmPassord)
            return false;
        return true
    }

    emailOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            email: event.target.value ?? ''
        });
    }

    firstnameOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            firstname: event.target.value ?? ''
        });
    }

    lastnameOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            lastname: event.target.value ?? ''
        });
    }

    passwordOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            password: event.target.value ?? ''
        });
    }

    confirmPasswordOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            confirmPassord: event.target.value ?? ''
        });
    }
}