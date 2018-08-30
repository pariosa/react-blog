import React, { Component } from 'react'; 
import './Footer.css';
import User from '../FunctionalComponent/User';
import Clock from '../FunctionalComponent/Clock';
import IpAddress from '../FunctionalComponent/IpAddress';
 	
  
class Footer extends Component {
	constructor(props){
		super(props);
		console.log(props);
		this.state = {
			authUser: props.authUser
		}
	}
	render(element){
		return(
			<div className="Footer" >   
		    	it is currently <Clock />. you are accessing this page from the web at: <IpAddress /> if i had to guess your email address it would be: <User user={this.state.authUser} />
		    </div> 
	    )
	}

}
   


export default Footer;