import React, { useContext, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import UserContext from "./Context/index";
import Flip from "react-reveal/Flip";
import ModalScreen from "./ModalScreen";


const style = {
  container: {
    boxShadow: "5px 10px 8px #888888",
    margin: "10px"
  },
  images: {
    width: "12rem",
    height: "12rem",
  },
  paper: {
    width: "55%",
    height: "50%",
  },
  modalImages:{
    width: "20rem",
    height: "20rem",
  },
  modalPaper:{
    width: "20rem",
    height: "20rem",
    position: "absolute",
    bottom: "30vh",
    right: "42vw",
    display: "flex",
    justifyContent: "center",
    alignContent: "center"  
  }    
};

/**
 * Component to render results in the Upcoming route.
 * Will map images to grid with clickable results to bring up front a more detailed
 * description of the clicked item from api.
 */
export default function UpcomingResults() {
  const state = useContext(UserContext);
  const { results, setValue, handleOpen } = state;
 
  useEffect(() => {
    setValue(1);
  }, [setValue]);

  const mouseDown = key => {
    results[key].parentNode.style.boxShadow = "none";
  };

  const mouseUp = key => {
    results[key].parentNode.style.boxShadow = "5px 10px 8px #888888";
  };

  const imageModal = (modalImage) => {
    return (
      <Paper style={style.modalPaper}>
        <img src={modalImage} style={style.modalImages} alt="modal" />
      </Paper>
    )
  }

  return (    
    <div>
      <div style={{display: "flex", justifyContent: "center", margin: "20px"}}>
        <Paper style={style.paper}>
          <h2>Upcoming Store Items!</h2>
          <p>Click through the boxes to browse through unreleased items. Release dates TBD.</p>
        </Paper>
      </div>
      <Grid container direction="row" justify="center" alignItems="center">
        <ModalScreen />
        {results.data.data.map(val => (
          <Flip right key={val.itemId}>
            <div style={style.container}>
              <img
                src={val.item.images.background}
                alt="icons"
                style={style.images}
                onMouseDown={() => mouseDown(val.itemId)}
                onMouseUp={() => mouseUp(val.itemId)}
                ref={ref => (results[val.itemId] = ref)}
                onClick={() => handleOpen(imageModal(val.item.images.information))}
              />
            </div>
          </Flip>
        ))}
      </Grid>
    </div>
  );
}
