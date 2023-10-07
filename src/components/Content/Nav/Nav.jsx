import React from 'react';
import classes from './Nav.module.css'
const Nav = () => {
    return <nav className={classes.nav}>
        <div className={classes.nav_element}><a href={'/'}>Profile</a></div>
        <div className={classes.nav_element }><a href={'/'}>Messages</a></div>
        <div className={classes.nav_element }><a href={'/'}>News</a></div>
        <div className={classes.nav_element }><a href={'/'}>Music</a></div>
        <div className={`${classes.nav_element} ${classes.settings}`}><a href={'/'}>Settings</a></div>
    </nav>
}

export default Nav