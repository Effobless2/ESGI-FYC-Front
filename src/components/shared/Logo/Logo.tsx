import React from "react";
import logo from '../../../logo.svg';

import './Logo.css';

export default class Logo extends React.Component {
    render() {
        return (
            <img src={logo} className="App-logo" alt="logo" />
        )
    }
}