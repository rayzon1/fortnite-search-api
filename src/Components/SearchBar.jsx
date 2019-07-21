import React, { useState } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";

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
 */
export default function SearchBar({ setSearchResults }) {
  const [textInput, setTextInput] = useState("");
  const classes = useStyles();

  const submitForm = (e) => {
    e.preventDefault();
    setSearchResults(textInput);
  }

  return (
    <form className={classes.container} onSubmit={submitForm} noValidate autoComplete="off">
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        className={classes.textField}
        margin="normal"
        onChange={(e) => setTextInput(e.target.value)}
      />
      <Button variant="contained" type="submit" className={classes.button}>
        Default
      </Button>
    </form>
  );
}
