import React from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <div className={'content'}>
                <Nav/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
