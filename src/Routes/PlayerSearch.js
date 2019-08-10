import React, { useEffect, useState } from "react";
// import UserContext from "../Components/Context/index";
import authToken from "../config";
import axios from "axios";
import PlayerSearchResults from "../Components/PlayerSearchResults";

export default function PlayerSearch() {
  //   const state = useContext(UserContext);
  //   const { userResults, setSearchUser } = state;
  const [userResults, setUserResults] = useState("");
  const [userId, setUserId] = useState([]);

  const users = username => {
    return `https://fortnite-api.theapinetwork.com/users/id?username=${username}`;
  };

  const getUserId = uid => {
    return `https://fortnite-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${uid}`;
  };

  const apiSettings = url => {
    var settings = {
      url: `${url}`,
      method: "GET",
      timeout: 0,
      headers: {
        Authorization: authToken
      }
    };
    return settings;
  };


  useEffect(() => {
    const callApi = (url, url2) => {
        axios(url).then(val => {
          setUserResults(val.data.data.uid);
          return axios(url2)
        }).then(val => {
            setUserId(val);
        }).catch(error => console.log("There was an error", error.code))
      }

    callApi(apiSettings(users("Parkdood")), apiSettings(getUserId(userResults)));  
    return function() {
        console.log("Effect unmounted")
    }
        
  }, [userResults]);

  

  
  return userResults.length > 0 && Object.keys(userId).length > 0 && <PlayerSearchResults userResults={userResults} userId={userId} />
}
