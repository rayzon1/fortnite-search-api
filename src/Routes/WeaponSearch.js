import React, { useState, useEffect, useContext } from "react";
import SearchBar from "../Components/SearchBar";
import Paper from "@material-ui/core/Paper";
import WeaponSearchResults from "../Components/WeaponSearchResults";
import UserContext from "../Components/Context/index";
import fortnite_art_weapons from "../Static/fortnite_art_weapons.jpg";
import styles from "../Modules/route_styles/weapon-search-route.module.css";

const style = {
  // container: {
  //   display: "flex",
  //   justifyContent: "center",
  //   marginTop: "40px"
  // },
  // paper: {
  //   width: "55%",
  //   height: "50%"
  // },
  // images: {
  //   width: "50%",
  //   height: "50%",
  //   marginTop: "40px",
  //   marginBottom: "100px",
  //   borderRadius: "25px",
  //   boxShadow: "5px 10px 8px #888888"
  // }
};

export default function WeaponSearch() {
  const [searchResults, setSearchResults] = useState("");
  const state = useContext(UserContext);
  const { setValue } = state;
  const imageRef = React.createRef();

  //! escalate to app.js. Turn into a Boolean hook, with true or false for submit press.
  const hideImage = input => {
    if (input.length > 0) {
      imageRef.current.style.display = "none";
    } else {
      imageRef.current.style.display = "";
    }
  };

  useEffect(() => {
    setValue(2);
  }, [setValue]);

  return (
    <div>
      <div className={styles.container}>
        <Paper className={styles.paper}>
          <h2>Weapon Search Page!</h2>
          <p>Search for weapon keywords (assault rifle, shotgun, smg).</p>
        </Paper>
      </div>
      <SearchBar setSearchResults={setSearchResults} hideImage={hideImage} />
      <img
        src={fortnite_art_weapons}
        className={styles.images}
        ref={imageRef}
        alt="fortnite-art"
      />
      <WeaponSearchResults searchResults={searchResults} />
    </div>
  );
}
