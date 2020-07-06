import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Auth from './pages/Auth';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Redirect to="/auth" /></Route>
        <Route path='/auth' component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
