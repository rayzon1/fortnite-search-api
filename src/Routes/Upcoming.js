import React from "react";
import UpcomingResults from "../Components/UpcomingResults";
import Paper from "@material-ui/core/Paper";

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px"
  },
  paper: {
    width: "55%",
    height: "50%"
  }
};

// TODO: Set upcoming page with results from upcoming query.

export default function Upcoming() {
  return (
    <div>
      <div style={style.container}>
        <Paper style={style.paper}>
          <h2>Upcoming Store Items!</h2>
          <p>
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
