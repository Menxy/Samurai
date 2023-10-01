import React from 'react';

const Nav = () => {
    return <nav className={'nav'}>
        <div className={'nav_element'}><a href={'/'}>Profile</a></div>
        <div className={'nav_element'}><a href={'/'}>Messages</a></div>
        <div className={'nav_element'}><a href={'/'}>News</a></div>
        <div className={'nav_element'}><a href={'/'}>Music</a></div>
        <div className={'nav_element settings'}><a href={'/'}>Settings</a></div>
    </nav>
}

export default Nav