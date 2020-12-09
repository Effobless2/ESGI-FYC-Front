import { bindActionCreators, ThunkDispatch } from "@reduxjs/toolkit";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { User } from "../../models/User";
import { StoreType } from "../../store";
import { setToken } from "../../store/actions/tokenActions";
import { setUser } from "../../store/actions/userActions";
import types from "../../store/types";
import './Header.css';

interface UserProp {
    user: User | null;
}

interface DispatchProp {
    setUser: (user: User | null) => void;
    setToken: (token: string) => void;
}

type HeaderProp = {
    appName: string;
};

const mapStateProp = (state: StoreType, _: HeaderProp): UserProp => ({
    user: state.user.user
});

const mapDispatchProp = (dispatch: ThunkDispatch<any, any, types>, _: HeaderProp): DispatchProp => ({
    setUser: bindActionCreators(setUser, dispatch),
    setToken: bindActionCreators(setToken, dispatch)
});

type Prop = HeaderProp & UserProp & DispatchProp;

class Header extends React.Component<Prop> {

    constructor(props: any) {
        super(props);
        this.disconnect = this.disconnect.bind(this);
    }
    
    disconnect(){
        this.props.setToken('');
        this.props.setUser(null);
    }

    render() {
        return (
            <Navbar className="App-header" expand="lg">
                <Navbar.Brand href="/">
                    {this.props.appName}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="App-link" to="/">Home</Link>
                        <Link className="App-link" to="/authentication">Authentication</Link>
                        <Link className="App-link" to="/contacts">Contacts</Link>
                        <Link className="App-link" to="/blogposts">Posts</Link>
                        <Link className="App-link" to="/createblogpost">Create a post</Link>
                        {
                            this.props.user !== null ?
                                <div>
                                    <Link 
                                        className="App-link"
                                        to={`/profile/${this.props.user.id}`}
                                        > {this.props.user?.firstName + " " + this.props.user?.lastName}
                                    </Link>
                                    <Button onClick={this.disconnect}>Disconnect</Button>
                                </div>
                            : <Link className="App-link" to="/loging">Connect</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle>
                </Navbar.Toggle>
            </Navbar>
        )
    }
}

export default connect(mapStateProp, mapDispatchProp)(Header);