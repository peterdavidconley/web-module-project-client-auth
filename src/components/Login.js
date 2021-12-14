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

      handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

      login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', this.state.credentials)
        .then(resp => {
            const { role, token, username } = resp.data;
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            localStorage.setItem("username", username);
            this.props.history.push('/friends-list');
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
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
            />
          </label>
          </center>
          <center>
          <label>PASSWORD:
          <br />
            <input 
            type='password'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
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