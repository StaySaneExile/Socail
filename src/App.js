import React, {Profiler} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./head/Header"
import Nav from "./Nav/Nav"
import Profile from "./Profile/Profile"


const App = () => {
    return (
        <div className = "wrapper" >
        <Header />
        <Nav/>
        <Profile/>
        </div>

);
}

export default App;
