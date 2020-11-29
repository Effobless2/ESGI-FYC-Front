import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { User } from "../../models/User";
import { StoreType } from "../../store";
import './Header.css';

interface UserProp {
    user: User | null;
}

type HeaderProp = {
    appName: string;
};

const mapStateProp = (state: StoreType, _: HeaderProp): UserProp => ({
    user: state.user.user
});

class Header extends React.Component<HeaderProp & UserProp> {
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
                                <Link 
                                    className="App-link"
                                    to={`/profile/${this.props.user.id}`}
                                    > {this.props.user?.firstName + " " + this.props.user?.lastName}
                                </Link>
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

export default connect(mapStateProp)(Header);