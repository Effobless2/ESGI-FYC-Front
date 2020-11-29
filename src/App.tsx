import { createBrowserHistory } from 'history';
import React from 'react';
import {
  Route,
  Router,
  Switch
} from "react-router";
import './App.css';
import Header from './layout/Header';
import BlogPosts from './pages/BlogPosts';
import Contacts from './pages/Contacts';
import CreateBlogPost from './pages/CreateBlogPost';
import EditBlogPost from './pages/EditBlogPost';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Loging from './pages/Loging';
import ReadBlogPost from './pages/ReadBlogPost';
import Authentication from './pages/Registration';
import UserProfile from './pages/UserProfile';

export type AppProps = {
  appName: string;
}

export default class App extends React.Component<AppProps> {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Header appName={this.props.appName} />
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/authentication" component={Authentication} exact />
            <Route path="/contacts" component={Contacts} exact />
            <Route path="/profile/:userId" component={UserProfile} exact />
            <Route path="/profile/edit/:userId" component={EditProfile} exact />
            <Route path="/blogposts" component={BlogPosts} exact />
            <Route path="/createblogpost" component={CreateBlogPost} exact />
            <Route path="/blogpost/:id" component={ReadBlogPost} exact />
            <Route path="/blogpost/edit/:id" component={EditBlogPost} exact />
            <Route path='/loging' component={Loging} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}
