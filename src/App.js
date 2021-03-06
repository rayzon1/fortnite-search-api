import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Routes/Home';
import Upcoming from './Routes/Upcoming';
import WeaponSearch from './Routes/WeaponSearch';
import PlayerSearch from './Routes/PlayerSearch';
import HomeJumbotron from "./Components/HomeJumbotron";
import TabLinks from "./Components/TabLinks";
import { HashRouter, Route, Switch } from "react-router-dom";
import authToken from './config';
import axios from 'axios';
import { UserProvider } from './Components/Context/index';
import { PlayerSearchProvider } from './Components/Context/PlayerSearchContext';
import { SearchBarProvider } from './Components/Context/SearchBarContext';

/**
 *  Main App to organize and structure all of my components.
 *  TODO: Layout SPA, Add routes -Hashrouter -Switch
 *  ! Provider source / Router source
 */
function App() {
  const [results, setResults] = useState([]);
  const [newsResults, setNewsResults] = useState([]);
  const [weaponResults, setWeaponResults] = useState([]);
  const [searchResults, setSearchResults] = useState("");
  // const [textInput, setTextInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [hideImage, setHideImage] = useState(false);
  const [value, setValue] = useState(0);
  const [searchBarSubmit, setSearchBarSubmit] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const upcoming = `https://fortnite-api.theapinetwork.com/upcoming/get?authorization=${authToken}`;
  const news = `https://fortnite-api.theapinetwork.com/br_motd/get?authorization=${authToken}`;
  const weapons = "https://fortnite-api.theapinetwork.com/weapons/get"

   /**
   * 
   *  TODO: Player search provider functions will go here.
   *  TODO: Create seperate api call functions for playersearch.
   *  TODO: Will create new playersearch context provider/consumer.
   *  !New provider will wrap here.
   * 
   */

  const [userResults, setUserResults] = useState("");
  const [userId, setUserId] = useState([]);


  const users = username  => {
    return `https://fortnite-api.theapinetwork.com/users/id?username=${username}`;
  };

  const getUserId = uid => {
    return `https://fortnite-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${uid}`;
  };

  const callPlayerSearchApi = url => {

    return axios(url)
      .then(val => {
        console.log(val);
        if(Object.keys(val.data).length > 2){
          return console.log("unknown user")
        }     
        if(val.data.data.uid) {
          let data1 = val.data.data.uid
          return setUserResults(data1);
        }
           
      })

  }

  const callPlayerSearchApi2 = url => {
    if (userResults.length > 0) {
      return axios(url).then(val => {
        return setUserId(val.data);
      }).catch(error => console.log("There was an error", error.code))
    }
    
  }


  /**
   * 
   * This is the start of functions for other pages.
   * ! Home, Upcoming and Weapon search functions state.
   *  
   */

  const apiSettings = (url) => {
    var settings = {
      "url": `${url}`,
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Authorization": authToken
      },
    };
    return settings;
  }

  const submitForm = e => {
      e.preventDefault();
      setSearchBarSubmit(true);
    };
  
  
  useEffect(() => {
    callApi(upcoming, news, apiSettings(weapons));
  }, [upcoming, news])

  useEffect(() => {
    if (searchBarSubmit === true) {
      setSearchBarSubmit(false);
      return setSearchResults(searchQuery);
    }
    return function() {
      setSearchQuery("");
    };
  }, [searchBarSubmit]);

  /**
   * Main API call function for upcoming, news and weapons page.
   * Will call for data and populate pages upon site load.
   */
  const callApi = (url1, url2, url3) => {
     axios.all([
       axios.get(url1),
       axios.get(url2),
       axios(url3),
     ])
     .then(axios.spread((upcomingRes, newsRes, weaponRes) => {
       setResults(upcomingRes);
       setNewsResults(newsRes);
       setWeaponResults(weaponRes);
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

  const getSearchQuery = text => {
    setSearchQuery(text);
  }

  // ! Next time create store object with state and action values to keep it more organized.
  // ! USE REACT-ENTITIES https://www.npmjs.com/package/react-entities
  return (
    <HashRouter>
      <Switch>
        <SearchBarProvider value={{
          // searchResults,
          // setSearchResults,
          submitForm,
          // setTextInput,
          // textInput,
          getSearchQuery,
          setHideImage
        }}>
          <PlayerSearchProvider value= {{
            userResults,
            userId,
            users,
            setHideImage,
            getUserId,
            callPlayerSearchApi,
            apiSettings,
            searchBarSubmit,
            callPlayerSearchApi2,
            searchResults
          }}>
            <UserProvider value={{
              results,
              newsResults,
              upcoming,
              searchResults,
              value,
              setValue,
              open,
              setOpen,
              handleOpen,
              handleClose,
              searchBarSubmit,
              modalImage,
              weaponResults,
              hideImage,
              setHideImage
            }}>
              <div className="App">
                <Header /> 
                <HomeJumbotron /> 
                <TabLinks /> 
                <Route exact path='/' render={() => newsResults.length === 0 ? null : <Home />} />
                <Route exact path='/upcoming' render={() => results.length === 0 ? null : <Upcoming />} />
                <Route exact path='/weaponsearch' render={() => weaponResults.length === 0 ? null : <WeaponSearch />} />
                <Route exact path='/playersearch' render={() =>  <PlayerSearch />} />
              </div> 
            </UserProvider>
          </PlayerSearchProvider>
        </SearchBarProvider>
      </Switch>
    </HashRouter>
    
  );
}

export default App;
