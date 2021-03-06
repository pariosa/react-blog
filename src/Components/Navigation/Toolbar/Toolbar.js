import React from 'react';

import './Toolbar.css'; 
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'; 

const logo =(<svg version="1.1" id="Layer_1"  x="0px" y="0px" width="35px" height="35px" viewBox="0 0 359.998 359.998" enableBackground="new 0 0 359.998 359.998"><g><rect x="71.998" y="282.5" fill="#82b1ff" width="63" height="31"/><g><polygon fill="#82b1ff" points="266.998,173.5 115.998,173.5 115.998,339.387 216.029,341.5 258.311,321.425 310.904,293.953 313.998,254.858"/><circle fill="none" stroke="#bd83fc" strokeWidth="32" cx="179.9" cy="179.9" r="160.999"/></g></g></svg>);

const toolbar = ( props ) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className="Logo">
        	{logo}
        </div> 
        <nav className="DesktopOnly">
           	<NavigationItems />
        </nav>
    </header>
);

export default toolbar;