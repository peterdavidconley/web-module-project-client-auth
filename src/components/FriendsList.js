import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class FriendsList extends React.Component {

    state = {
        friends: []
    }

    componentDidMount(){

       axiosWithAuth()
      .get('/friends')
      .then(resp=> {
        this.setState({
          friends: resp.data
        });
      })
      .catch(err=> {
        console.log(err);
      })
    }

    render() {
        return(
        <div>
            <center>
            <h1>Friend's List</h1>
            {this.state.friends.map(friend => {
                return <h3 key={friend.id}>- {friend.name} - {friend.email}</h3>
            })}
            </center>
        </div>)
    }
}

export default FriendsList