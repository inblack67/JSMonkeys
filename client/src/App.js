import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';
import Navbar from './components/dumb/Navbar';
import Landing from './components/dumb/Landing';
import Login from './components/smart/auth/Login';
import Register from './components/smart/auth/Register';


function App() {

  useEffect(() => {
    // MJS init
    M.AutoInit();
  });

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
