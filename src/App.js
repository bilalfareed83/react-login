import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';


function App() {
  return (
    // <div>
    //   <Login/>
    // </div>
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route  path='/admin' component={Admin} />
      <Route  path='/logout' component={Logout} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
