import React,{Component} from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

class navigationItems extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return( 
		    <ul className="NavigationItems">
		        <NavigationItem link="/" active>Blog</NavigationItem>
		        <NavigationItem link="/links">Links</NavigationItem>
		        <NavigationItem link="/contact">Contact</NavigationItem>
		        <NavigationItem link="/signin">Login</NavigationItem>
		        <NavigationItem link="/signup">Sign Up</NavigationItem>
		        <NavigationItem link="/signout">Logout</NavigationItem>
		    </ul>
		);
	}
}
export default navigationItems;