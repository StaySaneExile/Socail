import React, {Profiler} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Nav from "./Nav"
import Profile from "./Profile"


const App = () => {
    return (
        < div
    className = "wrapper" >
        <Header />
        <Nav/>
        <Profile/>
        </div>

);
}

export default App;
