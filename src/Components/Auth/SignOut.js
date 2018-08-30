import React, { Component } from 'react';
import { auth } from '../../firebase/firebase';



class SignOut extends Component { 
	
	onComponentDidRender(){
		auth.doSignOut();
	}
	render(){
		return(
			<div>
				You have logged out~!
			</div>
		);
	}
}

export default SignOut;