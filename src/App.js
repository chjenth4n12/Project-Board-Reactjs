import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import ProjectBoard from './component/ProjectBoard';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProjectTask from './component/ProjectTask/AddProjectTask';
import { Provider } from "react-redux";
import store from "./store";
import UpdateProjectTask from './component/ProjectTask/UpdateProjectTask';

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar></Navbar>
                        <Route exact path="/" component={ProjectBoard} />
                        <Route exact path="/addProjectTask" component={AddProjectTask} />
                        <Route exact path="/updateProjectTask/:id" component={UpdateProjectTask} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
