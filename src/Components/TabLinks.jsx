import React, { useContext } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";
import UserContext from "../Components/Context/index";
import $ from "jquery";

/**
 * Centered tabs, will display on all routes.
 * TODO: Create links for each tab.
 * TODO: Change width of tab bar when on mobile screen (< 380)
 * TODO: Make sure when page reloads the tab is selected on the correct page. 
 *   ! important
 */
function TabLinks(props) {
  
  const state = useContext(UserContext);
  const { value, setValue } = state;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLinks = value => {
    props.history.replace(value)
  };

  return (
    <div style={{ flexGrow: "1", margin: "0"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant={$(window).width() < 769 ? "fullWidth" : "standard"}
        centered
      >
        <Tab label="Home" className={"tabs"} onClick={() => handleLinks("/")} />
        <Tab label={$(window).width() < 769 ? "Upcoming" : "Upcoming Items"} className={"tabs"} onClick={() => handleLinks("/upcoming")} />
        <Tab label={$(window).width() < 769 ? "Weapons" : "Weapon Search"} className={"tabs"} onClick={() => handleLinks("/weaponsearch")}/>
        <Tab label={$(window).width() < 769 ? "Players" : "Player Information"} className={"tabs"} onClick={() => handleLinks("/playersearch")}/>
      </Tabs>
    </div>
  );
}

export default withRouter(TabLinks);
