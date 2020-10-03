import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import Header from './layout/Header';

export type AppProps = {
  appName: string;
}

export default class App extends React.Component<AppProps> {
  render() {
    return (
      <Router>
        <Header appName={this.props.appName} />
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/authentication" component={Authentication} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}
