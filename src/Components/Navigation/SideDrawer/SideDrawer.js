import React from 'react';
  
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop'; 
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const Fragment = React.Fragment;
const sideDrawer = ( props ) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}> 
                <nav className="NavigationDrawer">
                    <NavigationItem link="/" active>Blog</NavigationItem>
                    <NavigationItem link="/links">Links</NavigationItem>
                    <NavigationItem link="/contact">Contact</NavigationItem>
                    { this.state}
                    <NavigationItem link="/signin">Login</NavigationItem>
                    <NavigationItem link="/signup">Sign Up</NavigationItem>
                    <NavigationItem link="/signout">Logout</NavigationItem>
                 </nav>
            </div>
        </Fragment>
    );
};

export default sideDrawer;