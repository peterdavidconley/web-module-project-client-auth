import React from 'react';
import axios from 'axios';
import '../App.css';

class AddFriend extends React.Component {

    state = {
        newFriend: {
          friend: '',
          email: ''
        }
      };

      handleChange = e => {
        this.setState({
            credentials: {
              ...this.state.newFriend,
              [e.target.name]: e.target.value
            }
          });
      };

      newFriend = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/friends', this.state.newFriend)
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
        <form className='login-form' onSubmit={this.newFriend}>
          <center>
          <label>FRIEND NAME:
          <br />
            <input 
            type='text'
            name='friend'
            onChange={this.handleChange}
            value={this.state.newFriend.friend}
            />
          </label>
          </center>
          <center>
          <label>FRIEND EMAIL:
          <br />
            <input 
            type='text'
            name='email'
            onChange={this.handleChange}
            value={this.state.newFriend.email}
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