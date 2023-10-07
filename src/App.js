import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import classes from './App.module.css'
import Content from "./components/Content/Content";

function App() {
    return (
        <div className={classes.app_wrapper}>
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
