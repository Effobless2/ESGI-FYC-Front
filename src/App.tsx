import React from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './layout/Header';
import Authentication from './pages/Authentication';
import Contacts from './pages/Contacts';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';

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
            <Route path="/contacts" component={Contacts} exact />
            <Route path="/profile/:userId" component={UserProfile} exact />
            <Route path="/profile/edit/:userId" component={EditProfile} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}
