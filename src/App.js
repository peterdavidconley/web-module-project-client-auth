import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

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
      <div className='login'>
        <h1>LOGIN</h1>
        <form className='login-form'>
          <center>
          <label>USERNAME:
          <br />
            <input 
            type='text'
            />
          </label>
          </center>
          <center>
          <label>PASSWORD:
          <br />
            <input 
            type='text'
            />
          </label>
          </center>
          <center>
          <button>SUBMIT</button>
          </center>
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
