import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Routes/Home';
import HomeJumbotron from "./Components/HomeJumbotron";
import TabLinks from "./Components/TabLinks";
import { HashRouter, Route, Switch } from "react-router-dom";

/**
 *  Main App to organize and structure all of my components.
 *  TODO: Layout SPA, Add routes -Hashrouter -Switch
 */
function App() {
  return (
    <HashRouter>
      <Switch>
        <div className="App">
          <Header /> 
          <HomeJumbotron /> 
          <TabLinks /> 
          <Route exact path='/' component={Home} />
        </div>
      </Switch>
    </HashRouter>
    
  );
}

export default App;
