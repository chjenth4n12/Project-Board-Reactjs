import React, { Component} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import ProjectBoard from './component/ProjectBoard';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    render () {
        return (
            <div className="App">
                <Navbar></Navbar>
                <ProjectBoard></ProjectBoard>
            </div>
        );
    }
}

export default App;
