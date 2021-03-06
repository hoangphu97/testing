import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Following from './components/Following';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Followers from './components/Followers';
import EditProfile from './components/EditProfile';

class App extends Component {
  render() {
    return (
      <Router>
    <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/following" component={Following} />
        <Route path="/followers" component={Followers} />
        <Route path="/editprofile" component={EditProfile} />
	<Route/>        
    </div>
  </Router>
    );
  }
}

export default App;
