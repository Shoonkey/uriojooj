import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import UserProvider from './components/UserProvider';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Problems from './pages/Problems';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <UserProvider>
          <Route exact path='/'><Redirect to="/dashboard" /></Route>
          <Route path='/auth' component={Auth} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/problems' component={Problems} />
        </UserProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
