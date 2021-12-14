import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios'
import credentials from './mocks/credentials';
import Login from './components/Login';

function App() {


  return (
    <div className="App">
      <div className='heading'>
        <h3>Friends Database</h3>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/friends-list">Friends List</Link>
        <br/>
        <Link to="/add-friend">Add Friend</Link>
        <br/>
        <Link to="/logout">Logout</Link>
      </div>
      <Login />
      <Switch>
        <Route path="/login" />
        <Route path="/" />
      </Switch>
    </div>
  );
}

export default App;
