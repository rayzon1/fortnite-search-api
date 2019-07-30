import React, { useContext, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import UserContext from "./Context/index";
import Flip from "react-reveal/Flip";
import ModalScreen from "./ModalScreen";
import styles from "../Modules/component_styles/upcoming-results-comp.module.css";

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
      <Paper className={styles.modalPaper}>
        <img src={modalImage} className={styles.modalImages} alt="modal" />
      </Paper>
    )
  }

  return (    
    <div className={styles.container}>
      <Grid container direction="row" justify="center" alignItems="center" style={{ width: "75%"}}>
        <ModalScreen />
        {results.data.data.map(val => (
          <Flip right key={val.itemId}>
            <div className={styles.imageContainer}>
              <img
                src={val.item.images.background}
                alt="icons"
                className={styles.images}
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
