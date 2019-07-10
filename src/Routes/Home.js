import React from "react";
import SearchBar from "../Components/SearchBar";
import { Paper, makeStyles }  from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: "60vh",
    marginTop: "2vh",
  },
}));

/**
 * Main Home component will render homepage upon route.
 * TODO: Create layout for homepage, will route upon '/'.
 */
export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <SearchBar />
      </Paper>
    </div>
  );
}
