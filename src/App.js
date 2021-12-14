import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='heading'>
        <h3>Friends Database</h3>
        <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friends-list">Friends List</Link>
            </li>
            <li>
              <Link to="/add-friend">Add Friend</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
        </ul>    
      </div>
      <div className='login-form'>
        <h2>LOGIN</h2>
        <form>
          <label>USERNAME:
            <input 
            type='text'
            placeholder='enter your username'
            />
          </label>
          <label>PASSWORD:
            <input 
            type='text'
            placeholder='enter your password'
            />
          </label>
          <button>SUBMIT</button>
        </form>
      </div>
      <Switch>
        <Route path="/login" />
        <Route path="/" />
      </Switch>
    </div>
  );
}

export default App;
