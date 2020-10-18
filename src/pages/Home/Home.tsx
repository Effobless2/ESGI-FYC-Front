import React from "react";
import ListItem from "../../components/list-item";
import Logo from "../../components/shared/Logo";
import { ControllerService } from "../../services/ControllerService";
import './Home.css';

interface HomeState {
    elems: number[];
  }
export default class Home extends React.Component<{}, HomeState> {
    constructor(props: any) {
        super(props)
        this.state = {
            elems: []
        };
    }

    componentWillMount() {
        const service = new ControllerService();
        service.get().then((result: number[]) => this.setState({elems: result}));
    }

    render() {
        return (
            <div>
                {this.state.elems.map((value, index) => {
                    return <ListItem key={index} content={value} />
                })}
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