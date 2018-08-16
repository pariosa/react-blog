import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Blog</NavigationItem>
        <NavigationItem link="/">Links</NavigationItem>
    </ul>
);

export default navigationItems;