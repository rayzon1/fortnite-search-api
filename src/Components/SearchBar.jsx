import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  Button,
  Tooltip,
  Fade
} from "@material-ui/core";

// Styles from Material-UI
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "25px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1),
    height: "3rem",
    top: "8px"
  }
}));

/**
 * Main Searchbar for homepage.
 * TODO: Add clear button to clear search field and reset results.
 */
export default function SearchBar({ setSearchResults, hideImage }) {
  const [textInput, setTextInput] = useState("");
  const classes = useStyles();

  const submitForm = e => {
    e.preventDefault();
    setSearchResults(textInput);
  };

  return (
    <form
      className={classes.container}
      onSubmit={submitForm}
      noValidate
      autoComplete="off"
    >
      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        placement="left"
        title="Type and Submit to search for a weapon."
      >
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          onChange={e => setTextInput(e.target.value)}
        />
      </Tooltip>
      <Button
        variant="contained"
        type="submit"
        className={classes.button}
        onClick={() => hideImage(textInput)}
      >
        Submit
      </Button>
    </form>
  );
}
