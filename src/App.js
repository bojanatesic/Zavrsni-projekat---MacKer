import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import About from './layout/private/components/About';
import Cats from './layout/private/components/cats/Cats';
import Dogs from './layout/private/components/dogs/Dogs';
import { PublicRoute } from './layout/public/PublicRoute';
import PrivateRoute from './layout/private/PrivateRoute';
import Logout from './layout/private/components/Logout';
import WelcomePage from './layout/public/components/WelcomePage';
import { Register } from './layout/public/components/SignUp';
import { LogIn } from './layout/public/components/LogIn';
import Profile from './layout/private/components/Profile';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <PublicRoute component={LogIn} exact path='/login' />
          <PublicRoute component={Register} exact path='/register' />
          <PrivateRoute component={About} exact path="/about" />
          <PrivateRoute component={Cats} path="/cats" />
          <PrivateRoute component={Dogs} exact path="/dogs" />
          <PrivateRoute component={Profile} exact path="/profile" />
          <PrivateRoute component={Logout} exact path="/logout" />
          <PublicRoute component={WelcomePage} path="/" />
        </Switch>
      </Router>
    </>
  )
}

export default App;
