import React from 'react';
import classes from './Header.module.css'
const Header = () => {
    return <header className={classes.header}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Official_b.a.t.m.a.n._logo.svg/2560px-Official_b.a.t.m.a.n._logo.svg.png"
            alt="mylogo"/>
    </header>
}

export default Header