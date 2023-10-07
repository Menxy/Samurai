import React from "react";
import Nav from "./Nav/Nav";
import Profile from "./Profile/Profile";
import classes from './Content.module.css';

const Content = () => {
    return (
        <div className={classes.content}>
            <Nav/>
            <Profile/>
        </div>
    )
}

export default Content
