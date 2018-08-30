import React, { Component } from 'react'; 
import { firebase } from './firebase';

import './App.css';
 

import Layout from './Components/Layout/Layout'; 

class App extends Component {
  
  constructor(props){
  	super(props);

  	this.state = {
  		authUser: null
  	};
  }

  componentDidMount(){

    firebase.auth.onAuthStateChanged( authUser => {
        console.log('user logged in! ', authUser);
	    	authUser ? this.setState({ authUser: authUser }) : this.setState({ authUser: null});
	    }
    );
    console.log(this.state.authUser);

  }

  render () {
    return ( 
        <Layout authUser={this.state.authUser} />  
    );
  }
}

export default App; 
