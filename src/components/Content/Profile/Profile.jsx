import React from 'react';
import classes from './Profile.module.css'
import Card from "./Card/Card";
import Form from "./Form/Form";
import PostContainer from "./PostContainer/PostContainer";
const Profile = () => {
    return (
        <div className={classes.stuff}>
            <img
                src="https://media.licdn.com/dms/image/C5616AQGSvXIKQMm3jQ/profile-displaybackgroundimage-shrink_350_1400/0/1654109558602?e=1697673600&v=beta&t=8nWXca_QeNy5gzJXtw7qSaUTtd6XVf5sXWrmFIpuQSE"
                alt="gotham"/>
            <Card/>
            <Form/>
            <PostContainer/>
        </div>
    )
}

export default Profile