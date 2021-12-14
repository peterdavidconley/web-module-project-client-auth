import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios'
import Login from './components/Login';
import Logout from './components/LogOut'
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

function App() {


  return (
    <div className="App">
      <div className='heading'>
        <h3>Friends Database</h3>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/friends">Friends List</Link>
        <br/>
        <Link to="/friends/add">Add Friend</Link>
        <br/>
        <Link to="/logout">Logout</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/friends/add" component={AddFriend}/>
        <PrivateRoute exact path="/friends" component={FriendsList}/>
        <Route path='/logout' component={Logout}/>
        <Route path="/login" component={Login}/>
        <Route path="/" />
      </Switch>
    </div>
  );
}

export default App;
