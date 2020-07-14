import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import UserProvider from './components/UserProvider';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <UserProvider>
          <Route exact path='/'><Redirect to="/dashboard" /></Route>
          <Route path='/auth' component={Auth} />
          <Route path='/dashboard' component={Dashboard} />
        </UserProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
