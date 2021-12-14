import React, {useState} from 'react';
import axios from 'axios';
import '../App.css';
import { useHistory } from 'react-router-dom';


const AddFriend = () => {

    const { push } = useHistory();

      const [newFriend, setNewFriend] = useState({
          name: '',
          email: '',
        })
      

     const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
            });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', newFriend, {
          headers: 
          {authorization: token}
        })
        .then(resp => {
            console.log(resp)
            setNewFriend(resp.data)
            push('/friends');
        })
        .catch(err => {
          console.error(err)
        })
      }


    
        return(
        <div className='login'>
        <h1>ADD FRIEND</h1>
        <form className='login-form' onSubmit={handleSubmit}>
          <center>
          <label>FRIEND NAME:
          <br />
            <input 
            type='text'
            name='name'
            id='name'
            onChange={handleChange}
            value={newFriend.name}
            />
          </label>
          </center>
          <center>
          <label>FRIEND EMAIL:
          <br />
            <input 
            type='text'
            name='email'
            id='email'
            onChange={handleChange}
            value={newFriend.email}
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

export default AddFriend