import React, { useEffect, useContext } from "react";
import PlayerSearchContext from "../Components/Context/PlayerSearchContext";
import PlayerSearchResults from "../Components/PlayerSearchResults";

export default function PlayerSearch() {
  const state = useContext(PlayerSearchContext);
  const {
    userResults,
    callPlayerSearchApi,
    apiSettings,
    users,
    getUserId,
    userId,
    callPlayerSearchApi2
  } = state;

  useEffect(() => {
    callPlayerSearchApi(apiSettings(users("Parkdood")));

    return function() {
      console.log("Effect unmounted");
    };
  }, []);

  useEffect(() => {
    callPlayerSearchApi2(apiSettings(getUserId(userResults)));

    return function() {
      console.log("Effect unmounted");
    };
  }, [userResults]);

  return userResults.length > 0 && Object.keys(userId).length > 0 && <PlayerSearchResults userResults={userResults} userId={userId} />;
}
