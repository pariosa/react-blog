import React from 'react';
 
import NavigationItems from '../NavigationItems/NavigationItems';
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
                    <NavigationItem link="/">Links</NavigationItem>
                 </nav>
            </div>
        </Fragment>
    );
};

export default sideDrawer;