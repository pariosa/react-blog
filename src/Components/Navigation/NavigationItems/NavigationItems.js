import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Blog</NavigationItem>
        <NavigationItem link="/links">Links</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
        <NavigationItem link="/signin">Login</NavigationItem>
    </ul>
);

export default navigationItems;