import React from "react";
import UpcomingResults from "../Components/UpcomingResults";
import Paper from "@material-ui/core/Paper";
import styles from "../Modules/route_styles/upcoming-route.module.css";

// TODO: Set upcoming page with results from upcoming query.

export default function Upcoming() {
  return (
    <div>
      <div className={styles.container}>
        <Paper className={styles.paper}>
          <h2 className={styles.info}>Upcoming Store Items!</h2>
          <p className={styles.info}>
            Click through the boxes to browse through unreleased items. Release
            dates TBD.
          </p>
        </Paper>
      </div>
      <br />
      <UpcomingResults />
    </div>
  );
}
