import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';
import Routes from './routing/routes'
import Header from './components/dumb/Header';
import setAuthToken from './utils/setAuthToken';

import './App.css'

if(localStorage.token)
{
  setAuthToken(localStorage.token);
}

function App() {

  useEffect(() => {
    // MJS init
    M.AutoInit();
    store.dispatch(loadUser())
  });

  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      <Header />
        <Switch>
        <Route component={Routes}/>
        </Switch>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
