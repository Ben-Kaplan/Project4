import React, { Component } from 'react';
import './App.css';
import MainContainer from "./MainContainer";
import CreateThread from "./components/CreateThread/createThread.jsx";
import { Route, Switch, Link } from "react-router-dom";

const My404 = () => {
  return (
    <div>
        <h1>404'd!</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
         <Route path="/" component={MainContainer}/>
         <Route component={My404} />
       </Switch>
      </div>
    );
  }
}

export default App;
