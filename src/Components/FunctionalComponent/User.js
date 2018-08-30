import React, { Component } from 'react';

class User extends Component {

  constructor(props){
  	super(props);
  	console.log(props);
  	this.state = {
  		user : this.props.user
  	}
  }
  
  render() {
    return ( 
      this.state.user
    );
  }
}

export default User;