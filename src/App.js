import React, { useState, useEffect } from 'react';
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
  const [value, setValue] = React.useState(0);
  const upcoming = `https://fortnite-api.theapinetwork.com/upcoming/get?authorization=${authToken}`;

  useEffect(() => {
    callApi(upcoming);
  }, [upcoming])
  
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
            value: value,
            setValue: setValue
          }}>
            <div className="App">
              <Header /> 
              <HomeJumbotron /> 
              <TabLinks /> 
              <Route exact path='/' component={Home} />
              <Route exact path='/upcoming' render={() => results.length === 0 ? callApi(upcoming) : <Upcoming />} />
            </div> 
          </UserProvider>
      </Switch>
    </HashRouter>
    
  );
}

export default App;
