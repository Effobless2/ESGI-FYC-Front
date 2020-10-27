import React from "react";
import Logo from "../../components/shared/Logo";
import './Home.css';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Logo />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                  </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                  </a>
            </div>
        );
    }
}