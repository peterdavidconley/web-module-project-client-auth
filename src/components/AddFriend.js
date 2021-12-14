import React from 'react';
import axios from 'axios';
import '../App.css';

class AddFriend extends React.Component {

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
        axios.post('http://localhost:9000/api/friends', this.state.credentials)
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
        <h1>ADD FRIEND</h1>
        <form className='login-form'>
          <center>
          <label>FRIEND NAME:
          <br />
            <input 
            type='text'
            name='friend-name'
            />
          </label>
          </center>
          <center>
          <label>FRIEND EMAIL:
          <br />
            <input 
            type='text'
            name='password'
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

export default AddFriend