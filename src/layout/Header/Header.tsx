import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import './Header.css'

type HeaderProp = {
    appName: string;
}

export default class Header extends React.Component<HeaderProp> {
    render() {
        return (
            <Navbar className="App-header" expand="lg">
                <Navbar.Brand href="/">
                    {this.props.appName}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="App-link" href="/">Home</Nav.Link>
                        <Nav.Link className="App-link" href="/authentication">Authentication</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}