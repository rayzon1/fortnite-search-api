import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";

// Styles from Material-UI
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

/**
 * Centered tabs, will display on all routes.
 * TODO: Create NavLinks for each tab.
 */
function TabLinks(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLinks = value => {
    return props.history.replace(value);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" className={"tabs"} onClick={() => handleLinks("/")} />
        <Tab label="Upcoming Items" className={"tabs"} />
        <Tab label="Popular Items" className={"tabs"} />
        <Tab label="Player Information" className={"tabs"} />
      </Tabs>
    </div>
  );
}

export default withRouter(TabLinks);
