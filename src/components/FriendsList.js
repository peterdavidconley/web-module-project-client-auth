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
          //console.log(resp)
        // this.setState({
        //   friends: resp.data
        // });
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
            <h3>Name - Email</h3>
            {/* friendsArray.map(friend => {
                return <h3>- {friend.name} - {friend.email}</h3>
            })*/}
            </center>
        </div>)
    }
}

export default FriendsList