import React, { useContext } from "react";
import {
  TextField,
  Button,
  Tooltip,
  Fade
} from "@material-ui/core";
import styles from "../Modules/component_styles/searchbar-comp.module.css";
// import SearchBarContext from "./Context/SearchBar/SearchBarContext";

/**
 * Main Searchbar for homepage.
 * TODO: Add clear button to clear search field and reset results.
 */
export default function SearchBar({searchProvider}) {
  // const state = useContext(SearchBarContext);
  // const { submitForm, setTextInput, setHideImage } = state;
  const { submitForm, setTextInput, setHideImage } = searchProvider;

  return (
    <form
      className={styles.container}
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
          className={styles.textField}
          margin="normal"
          onChange={e => setTextInput(e.target.value)}
        />
      </Tooltip>
      <Button
        variant="contained"
        type="submit"
        className={styles.button}
        onClick={() => setHideImage(true)}
      >
        Submit
      </Button>
    </form>
  );
}
