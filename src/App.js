import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import './App.css';
import About from './layout/private/components/About';
import Cats from './layout/private/components/cats/Cats';
import Dogs from './layout/private/components/dogs/Dogs';
import Nav from './Nav';
import { PublicRoute } from './layout/public/PublicRoute';
import PrivateRoute from './layout/private/PrivateRoute';
import EntryPage from './layout/public/components/EntryPage';
import Logout from './layout/private/components/Logout';


function App() {

  return (
    <>
    <Router>
        <Nav />
      <Switch>
        <PublicRoute component={EntryPage} exact path="/" />
        
        <PrivateRoute component={About} exact path="/about" />
        <PrivateRoute component={Cats} path="/cats" />
        <PrivateRoute component={Dogs} exact path="/dogs" />
        <PrivateRoute component={Logout} exact path="/logout" />
      </Switch>
    </Router>
    </>
  )
}




export default App;
