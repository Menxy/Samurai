import React from 'react';
import classes from './Card.module.css';

const Card = () => {
    return (
        <div className={classes.card}>
            <div className={classes.my_photo}>
                <img
                    src="https://assets1.ignimgs.com/2020/08/26/redhoodexplained-blogroll-1598471454662_160w.jpg?width=200"
                    alt=""/>
            </div>
            <div className={classes.my_info}>
                <div className={classes.card_name}>Andriy L.</div>
                <div>Date of birth: 01.01.1990</div>
                <div>City: Barcelona</div>
                <div>Education: MIT'2015</div>
                <div>Web-site: https:\\gorgonzola.edu</div>
            </div>
        </div>
    );
};

export default Card;