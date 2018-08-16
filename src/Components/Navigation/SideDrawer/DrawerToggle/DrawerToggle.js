import React from 'react';

import './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className="DrawerToggle" onClick={props.clicked}>
        <div className="DrawerToggleItem"></div>
        <div className="DrawerToggleItem"></div>
        <div className="DrawerToggleItem"></div>
    </div>
);

export default drawerToggle;