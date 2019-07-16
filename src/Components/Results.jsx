import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import UserContext from "../Components/Context/index";
import Flip from "react-reveal/Flip";
import ModalScreen from "../Components/ModalScreen";

const style = {
  container: {
    boxShadow: "5px 10px 8px #888888",
    margin: "10px"
  },
  images: {
    width: "12rem",
    height: "12rem",
  }
};

// TODO: Switch userContext from this component to Upcoming component.
// TODO: Use refs to toggle current style on selected image.

export default function Results() {
  const state = useContext(UserContext);
  const { results, setValue, handleOpen } = state;
  const itemIds = results.data.data.map(val => val.itemId);

  useEffect(() => {
    setValue(1);
  }, [setValue]);

  const mouseDown = key => {
    results[key].parentNode.style.boxShadow = "none";
  };

  const mouseUp = key => {
    results[key].parentNode.style.boxShadow = "5px 10px 8px #888888";
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <ModalScreen />
      {results.data.data.map(val => (
        <Flip right>
          <div style={style.container}>
            <img
              src={val.item.images.icon}
              key={val.itemId}
              alt="icons"
              style={style.images}
              onMouseDown={() => mouseDown(val.itemId)}
              onMouseUp={() => mouseUp(val.itemId)}
              ref={ref => (results[val.itemId] = ref)}
              onClick={() => handleOpen(val.item.images.information)}
            />
          </div>
        </Flip>
      ))}
    </Grid>
  );
}
