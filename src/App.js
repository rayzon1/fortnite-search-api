import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Routes/Home';
import Upcoming from './Routes/Upcoming';
import HomeJumbotron from "./Components/HomeJumbotron";
import TabLinks from "./Components/TabLinks";
import { HashRouter, Route, Switch } from "react-router-dom";
import authToken from './config';
import axios from 'axios';
import { UserProvider } from './Components/Context/index';


/**
 *  Main App to organize and structure all of my components.
 *  TODO: Layout SPA, Add routes -Hashrouter -Switch
 *  ! Provider source / Router source
 */
function App() {
  const [results, setResults] = useState([]);
  // const [show, setShow] = useState(true); //! Hook to set up fade out on page switch.
  const upcoming = `https://fortnite-api.theapinetwork.com/upcoming/get?authorization=${authToken}`;
  
  const callApi = (url) => {
    axios
        .get(url)
        .then( val => setResults(val))
  }

  return (
    <HashRouter>
      <Switch>
          <UserProvider value={{
            results: results,
            callApi: callApi,
            upcoming: upcoming,
          }}>
            <div className="App">
              <Header /> 
              <HomeJumbotron /> 
              <TabLinks /> 
              <Route exact path='/' component={Home} />
              <Route exact path='/upcoming' component={Upcoming} />
            </div> 
          </UserProvider>
      </Switch>
    </HashRouter>
    
  );
}

export default App;
