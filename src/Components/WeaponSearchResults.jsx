import React, { useContext } from "react";
import UserContext from "./Context/index";
import ModalScreen from "./ModalScreen";
import { Paper } from "@material-ui/core";

const style = {
  weaponPics: {
    width: "12rem",
    height: "10rem"
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
 * ColorType will determine the background color styles of the item depending on rarity.
 */
const colorType = val => {
  if (val === "legendary") {
    return {
      backgroundColor: "rgba(252, 199, 45, 0.8)",
      borderRadius: "25px",
      margin: "10px"
    };
  } else if (val === "epic") {
    return {
      backgroundColor: "rgba(134, 3, 174, 0.7)",
      borderRadius: "25px",
      margin: "10px"
    };
  } else if (val === "rare") {
    return {
      backgroundColor: "rgba(3, 116, 204, 0.8)",
      borderRadius: "25px",
      margin: "10px"
    };
  } else if (val === "uncommon") {
    return {
      backgroundColor: "rgba(55, 166, 30, 0.8)",
      borderRadius: "25px",
      margin: "10px"
    };
  } else {
    return {
      backgroundColor: "rgba(109, 103, 105, 0.5)",
      borderRadius: "25px",
      margin: "10px"
    };
  }
};

const weaponModal = (name, ammo, dps) => {
  return (
    <Paper style={style.modalPaper}>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ marginBottom: "20px" }}>{name}</h3>
        <strong><p>{"Ammo Cost: "}<span style={{color: "red"}}>{ammo}</span></p></strong>
        <strong><p>{"DPS: "}<span style={{color: "red"}}>{dps}</span></p></strong>
      </div>
    </Paper>
  );
};

export default function WeaponSearchresults() {
  const state = useContext(UserContext);
  const { weaponResults, handleOpen } = state;
  console.log(weaponResults);

  return (
    <div style={{ marginTop: "40px" }}>
      <ModalScreen />
      {weaponResults.data.data.entries.map(val => (
        <label style={colorType(val.rarity)}>
          <div
            style={{ margin: "10px" }}
            ref={ref => (weaponResults[val.identifier] = ref)}
            onClick={() => handleOpen(weaponModal(val.name, val.stats.ammocost, val.stats.dps))}
          >
            <p>
              <strong>{val.name}</strong>
            </p>
            <img src={val.image} style={style.weaponPics} />
          </div>
        </label>
      ))}
    </div>
  );
}
