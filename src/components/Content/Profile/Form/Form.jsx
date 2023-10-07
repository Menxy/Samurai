import React from 'react';
import classes from './Form.module.css';

const Form = () => {
    return (
        <form className={classes.form} action={'get'}>
            <div className={classes.my_posts}>My posts</div>
            <input className={classes.form_input} type={'text'} placeholder={'your news...'}/>
            <button className={classes.send}>Send</button>
        </form>
    );
};

export default Form;