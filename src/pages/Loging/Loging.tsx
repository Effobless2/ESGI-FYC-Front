import { bindActionCreators, ThunkDispatch } from "@reduxjs/toolkit";
import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import SignInForm from "../../components/forms/signInForm";
import { User } from "../../models/User";
import { LogingService } from "../../services/LogingService";
import { StoreType } from "../../store";
import { connectUser } from "../../store/actions/logingActions";
import types from "../../store/types";
import { ConnectionData } from "../../store/types/LogingActionTypes";
import './Loging.css';

interface LogingProp{
    history: any
}
interface DispatchProp {
    connectUser: (data: ConnectionData) => void;
}

interface StateProp {
    user: User | null;
}

const mapStateProp = (state: StoreType, _:LogingProp): StateProp => ({
    user: state.user.user
});

type Props = LogingProp & DispatchProp & StateProp;

const mapDispatchProp = (dispatch: ThunkDispatch<any, any, types>, _: LogingProp): DispatchProp => ({
    connectUser: bindActionCreators(connectUser, dispatch),
});

class Loging extends React.Component<Props> {
    logingService: LogingService = new LogingService();
    constructor(props: Props) {
        super(props);
        this.onConnectedHandler = this.onConnectedHandler.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    onConnectedHandler(data: {login: string, password: string}): boolean {
        this.props.connectUser({
            login: data.login,
            password: data.password
        });
        return true;
    }

    componentDidUpdate(prevProps: Props, _: any) {
        if (this.props.user !== null) {
            this.props.history.push(`/profile/${this.props.user.id}`);
        }
    }

    redirect() {
        this.props.history.push('/authentication');
    }

    render(){
        return (
            <div>
                <SignInForm onSubmit={this.onConnectedHandler}/>
                <p>Not registered yet ? <Button onClick={this.redirect}>Create an account !</Button></p>
            </div>
        );
    }
}

export default connect(mapStateProp, mapDispatchProp)(Loging);