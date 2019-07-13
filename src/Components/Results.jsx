import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import UserContext from "../Components/Context/index";
import Flip from "react-reveal/Flip";


// TODO: Switch userContext from this component to Upcoming component.
// TODO: Use refs to toggle current style on selected image.

export default function Results() {
  const state = useContext(UserContext);
  const { results, setValue } = state;

  useEffect(() => {
    setValue(1);
  }, [setValue])

  const style = {
      div: {
        boxShadow: "5px 10px 8px #888888",
        margin: "10px"
      },
      img: {
        width: "15vw",
        height: "20vh",
      },
  }

  const mouseDown = (key) => {
    results[key].parentNode.style.boxShadow = 'none';
  }

  const mouseUp = (key) => {
    results[key].parentNode.style.boxShadow = '5px 10px 8px #888888';
  }

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {results.data.data.map(val => (
        <Flip right>
            <div style={style.div}>
                <img
                    src={val.item.images.icon}
                    key={val.itemId}
                    alt="icons"
                    style={style.img}
                    onMouseDown={() => mouseDown(val.itemId)}
                    onMouseUp={() => mouseUp(val.itemId)}
                    ref={ref => results[val.itemId] = ref}
                />
            </div>
        </Flip>
      ))}
    </Grid>
  );
}
