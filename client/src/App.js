import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <div 
            style={{ 
              display: "flex", justifyContent: "center", alignItems: "center", 
              minHeight: "100vh",
              backgroundColor: "#e2e2e2"
            }}
          >
            <h1>Nothing out here yet.</h1>
          </div>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
