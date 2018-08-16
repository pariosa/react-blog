import React from 'react';
 
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop'; 
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
                    <NavigationItems className="NavigationDrawerItems" />
                </nav>
            </div>
        </Fragment>
    );
};

export default sideDrawer;