import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import ProjectBoard from './component/ProjectBoard';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProjectTask from './component/ProjectTask/AddProjectTask';

class App extends Component {
    render () {
        return (
            <Router>
                <div className="App">
                    <Navbar></Navbar>
                    <Route exact path="/" component={ProjectBoard} />
                    <Route exact path="/addProjectTask" component={AddProjectTask} />
                </div>
            </Router>
        );
    }
}

export default App;
