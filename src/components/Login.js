import React from 'react';
import axios from 'axios';
import '../App.css';


class Login extends React.Component {

    state = {
        credentials: {
          username: '',
          password: ''
        }
      };

      login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/login', this.state.credentials)
        .then(resp => {
          console.log(resp)
        })
        .catch(err => {
          console.error(err)
        })
      }

    render() {
        return(
        <div className='login'>
        <h1>LOGIN</h1>
        <form className='login-form' onSubmit={this.login}>
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
        )
    }
}

export default Login