import React, { useContext } from "react";
import { Paper } from "@material-ui/core";
import { Fade } from "react-reveal";
import UserContext from "../Components/Context/index";
import styles from "../Modules/route_styles/home-route.module.css";

/**
 * Main Home component will render homepage upon route.
 * TODO: Create layout for homepage, will route upon '/'.
 * TODO: Create information sections about Fortnite, and app functionality.
 */
export default function Home() {
  const state = useContext(UserContext);
  const { newsResults } = state;

  return (
    <div className={styles.wrapper}> 
        <div className={styles.container}>
          <Paper
            className={styles.mainInfo}
            // style={{backgroundColor: "rgba(89, 42, 99, 0.1)"}}
          >
            <h4 className={styles.title} > 
              <span>Welcome to my FortNite item search App!</span>
            </h4>
            <br />
            <h5>What is FortNite?</h5>
            <br />
            <p className={styles.content}>
              Fortnite is an online video game developed by Epic Games and
              released in 2017. It is available in three distinct game mode
              versions that otherwise share the same general gameplay and game
              engine: Fortnite: Save the World, a cooperative shooter-survival
              game for up to four players to fight off zombie-like creatures and
              defend objects with fortifications they can build, Fortnite Battle
              Royale, a free-to-play battle royale game where up to 100 players
              fight to be the last person standing, and Fortnite Creative, where
              players are given complete freedom to create worlds and battle
              arenas. The first two game modes were released in 2017 as early
              access titles and Creative was released on December 6, 2018. Save
              the World is available only for Windows, macOS, PlayStation 4, and
              Xbox One, while Battle Royale has been released for those
              platforms and additionally for Nintendo Switch, iOS and Android
              devices.
            </p>
          </Paper>
        </div>
      <br />
      <br />
      <div className={styles.container}> 
        <Paper
          className={styles.mainInfo}
        >
          <div className={styles.newsContainer}>
            <h2>Fortnite News</h2>
            <p>
              This is the news.This is the news.This is the news.This is the
              news.This is the news.This is the news.This is the news.This is
              the news.This is the news.This is the news.This is the news.This
              is the news.This is the news.This is the news.This is the
              news.This is the news.This is the news.This is the news.This is
              the news.This is the news.This is the news.
            </p>
          </div>

          {newsResults.data.data.map((val, index) => (
              <Fade right key={index}>
                <div className={styles.imageContainer}> 
                  <img src={val.image} className={styles.newsImages} alt="news"/>
                  <p>{val.body}</p>
                </div>
              </Fade>
          ))}
          
        </Paper>
      </div>
    </div>
  );
}
