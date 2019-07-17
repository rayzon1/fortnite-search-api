import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Routes/Home';
import Upcoming from './Routes/Upcoming';
import Popular from './Routes/Popular';
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
  const [newsResults, setNewsResults] = useState([]);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const upcoming = `https://fortnite-api.theapinetwork.com/upcoming/get?authorization=${authToken}`;
  const news = `https://fortnite-api.theapinetwork.com/br_motd/get?authorization=${authToken}`;
  
  useEffect(() => {
    callApi(upcoming, news);
  }, [upcoming, news])

  const callApi = (url1, url2) => {
     axios.all([
       axios.get(url1),
       axios.get(url2)
     ])
     .then(axios.spread((upcomingRes, newsRes) => {
       setResults(upcomingRes);
       setNewsResults(newsRes);
     }))
  }

  const handleOpen = (image) => {
    setOpen(true);
    setModalImage(image);
  };

  const handleClose = () => {
    setOpen(false);
    setModalImage("");
  };

  console.log(results);
  return (
    <HashRouter>
      <Switch>
          <UserProvider value={{
            results: results,
            newsResults: newsResults,
            upcoming: upcoming,
            value: value,
            setValue: setValue,
            open: open,
            setOpen: setOpen,
            handleOpen: handleOpen,
            handleClose: handleClose,
            modalImage: modalImage
          }}>
            <div className="App">
              <Header /> 
              <HomeJumbotron /> 
              <TabLinks /> 
              <Route exact path='/' render={() => newsResults.length === 0 ? null : <Home />} />
              <Route exact path='/upcoming' render={() => results.length === 0 ? null : <Upcoming />} />
              <Route exact path='/popular' component={Popular} />
            </div> 
          </UserProvider>
      </Switch>
    </HashRouter>
    
  );
}

export default App;
