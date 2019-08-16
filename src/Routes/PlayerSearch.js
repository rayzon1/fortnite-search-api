import React, { useEffect, useContext } from "react";
import PlayerSearchContext from "../Components/Context/PlayerSearchContext";
import SearchBarContext from "../Components/Context/SearchBar/SearchBarContext";
import PlayerSearchResults from "../Components/PlayerSearchResults";
import styles from "../Modules/route_styles/player-route.module.css";
import Paper from "@material-ui/core/Paper";
import SearchBar from "../Components/SearchBar";

export default function PlayerSearch() {
  const context = useContext(PlayerSearchContext);
  const context2 = useContext(SearchBarContext);
  const {
    userResults,
    callPlayerSearchApi,
    apiSettings,
    users,
    getUserId,
    userId,
    callPlayerSearchApi2,
    searchBarSubmit,
    playerSearchResults,
    setPlayerSearchResults,
    setSearchBarSubmit,
  } = context;

  const { setHideImage, textInput, setTextInput, searchResults, setSearchResults } = context2;

  useEffect(() => {
    if(searchResults) {
      callPlayerSearchApi(apiSettings(users(searchResults)));
    }
    return function() {
      console.log("Search by text input effect unmounted");
    };
  }, [searchResults]);

  useEffect(() => {
    callPlayerSearchApi2(apiSettings(getUserId(userResults)));
    return function() {
      console.log("Search by user ID effect unmounted");
      setHideImage(false);
    };
  }, [userResults]);

  return (
    <div>
      <div className={styles.container}>
        <Paper className={styles.paper}>
          <h2>Player Search Page</h2>
          <p>Search for a player to see their stats!</p>
        </Paper>
      </div>
        <SearchBar />
        {userResults.length > 0 && Object.keys(userId).length > 0 && <PlayerSearchResults userId={userId} />}
    </div>
    )
}
