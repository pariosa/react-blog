import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';
import Clock from '../FunctionalComponent/Clock';
import IpAddress from '../FunctionalComponent/IpAddress';
 	
  
class Footer extends React.Component {
	render(element){
		return(
			<div className="Footer" >   
		    	it is currently <Clock />. you are accessing this page from the web at: <IpAddress />
		    </div> 
	    )
	}

}
   


export default Footer;