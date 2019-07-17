import React, { useContext } from "react";
import { Paper, makeStyles } from "@material-ui/core";
import { Fade } from "react-reveal";
import $ from "jquery";
import UserContext from "../Components/Context/index";

const useStyles = makeStyles(theme => ({
  media: {
    height: "20%",
    width: "20%"
  },
  mainInfo: {
    width: "55%",
    height: "50%"
  },
  newsImages: {
    width: "20rem",
    height: "10rem",
    marginRight: "20px"
  }
}));

/**
 * Main Home component will render homepage upon route.
 * TODO: Create layout for homepage, will route upon '/'.
 * TODO: Create information sections about Fortnite, and app functionality.
 */
export default function Home() {
  const classes = useStyles();
  const state = useContext(UserContext);
  const { newsResults } = state;

  return (
    <div style={{ marginTop: "40px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {$(window).width() < 380 ? null : (
            <img
              src={require("../Static/fortnite-png-47422.png")}
              alt="homePic"
              className={classes.media}
            />
          )}
          <Paper
            className={classes.mainInfo}
            style={$(window).width() < 380 ? { width: "100vw" } : null}
          >
            <h4 style={{ marginTop: "20px" }}>
              Welcome to my FortNite item search App!
            </h4>
            <br />
            <h5>What is FortNite?</h5>
            <br />
            <p style={{ margin: "20px" }}>
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
          {$(window).width() < 380 ? null : (
            <img
              src={require("../Static/fortnite-png-47403.png")}
              alt="homePic"
              className={classes.media}
            />
          )}
        </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper
          className={classes.mainInfo}
          style={$(window).width() < 380 ? { width: "100vw" } : null}
        >
          <div style={{ textAlign: "center", margin: "20px" }}>
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
                <div style={{ textAlign: "left", margin: "20px", display: "flex"}}>
                  <img src={val.image} className={classes.newsImages} alt="news" />
                  <p>{val.body}</p>
                </div>
              </Fade>
          ))}
          
        </Paper>
      </div>
    </div>
  );
}
