import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <h3>Number of Users: {this.props.userCount}</h3>
        <ul>
          // Users!
          // {/* Write code here that displays the usernames of all users in the Redux store */}
          // {/* In addition, display the total number of users curently in the store */}
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users,
          userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
