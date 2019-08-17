import React, { useEffect, useContext } from "react";
import SearchBar from "../Components/SearchBar";
import Paper from "@material-ui/core/Paper";
import WeaponSearchResults from "../Components/WeaponSearchResults";
// import UserContext from "../Components/Context/index";
import fortnite_art_weapons from "../Static/fortnite_art_weapons.jpg";
import styles from "../Modules/route_styles/weapon-search-route.module.css";

export default function WeaponSearch(props) {
  // const state = useContext(UserContext);
  const { setValue, searchResults, hideImage, setHideImage } = props.userProvider;
  const imageRef = React.createRef();

  //! escalate to app.js. Turn into a Boolean hook, with true or false for submit press.
  //! useEffect will set the text input in state based on true submit press.
  
  useEffect(() => {
    if(hideImage === true) {
      imageRef.current.style.display = "none";
    } else {
      imageRef.current.style.display = "";
    }
  }, [hideImage]);

  useEffect(() => {
    setValue(2);
  }, [setValue]);

  useEffect(() => {
    if(!searchResults) {
      setHideImage(false);
    }
  }, [searchResults])

  return (
    <div>
      <div className={styles.container}>
        <Paper className={styles.paper}>
          <h2 className={styles.info}>Weapon Search Page!</h2>
          <p className={styles.info}>Search for weapon keywords (assault rifle, shotgun, smg).</p>
        </Paper>
      </div>
      <SearchBar searchProvider={props.searchProvider}/>
      <img
        src={fortnite_art_weapons}
        className={styles.images}
        ref={imageRef}
        alt="fortnite-art"
      />
      <WeaponSearchResults searchResults={searchResults} userProvider={props.userProvider} />
    </div>
  );
}
