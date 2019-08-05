import React, { useContext } from "react";
import UserContext from "./Context/index";
import ModalScreen from "./ModalScreen";
import { Paper } from "@material-ui/core";
import styles  from "../Modules/component_styles/weaponsearch-results-comp.module.css";

/**
 * ColorType will determine the background color styles of the item depending on obj.rarity.
 */
const colorType = val => {
  switch (val) {
    case "legendary":
      return weaponBackground("rgba(252, 199, 45, 0.8)");
    case "epic":
      return weaponBackground("rgba(134, 3, 174, 0.7)");
    case "rare":
      return weaponBackground("rgba(3, 116, 204, 0.8)");
    case "uncommon":
      return weaponBackground("rgba(55, 166, 30, 0.8)");
    default:
      return weaponBackground("rgba(109, 103, 105, 0.5)");
  }
};

/**
 * Function will determine the background color of the image container.
 * Color string will be added as an argument.
 * @param {string} color 
 */
const weaponBackground = (color) => {
  return {
    backgroundColor: `${color}`,
    borderRadius: "25px",
    margin: "10px",
    boxShadow: "5px 10px 8px #888888"
  };
};

const createWeaponStats = (stat, object) => {
  return (
    <strong>
      <p>
        {`${stat}: `}
        <span style={{ color: "red", margin: "0" }}>{object}</span>
      </p>
    </strong>
  );
};

const rarityNameStyle = (rarity) => {
    switch (rarity) {
      case "epic":
        return {color: "purple"};
      case "uncommon":
        return { color: "green" };
      case "legendary":
        return { color: "gold" };
      case "rare":
        return { color: "blue" };
      default:
        return { color: "gray" };
    }
}

// !important
//TODO: add switch value to determine the color gradient of the modals background.
const modalBackgroundColor =(rarity) => {
  switch (rarity) {
    case "rare":
      return {background: "linear-gradient(-45deg, rgba(0, 144, 255, 0.3) 0%,rgba(87, 179, 249, 0.3) 100%)"}; 
    case "legendary":
      return {background: "linear-gradient(-45deg, rgba(254,252,234,0.5) 0%,rgba(241,218,54,0.5) 100%)"}
    default:
      break;
  }
}

const weaponModal = obj => {
  return (
    <>
      <Paper className={styles.modalPaper}>
        <div
          className={styles.modalPicBackground}
          style={modalBackgroundColor(obj.rarity)}
        >
          <h4>
            <strong>{obj.name}</strong>
          </h4>
          <h4
            style={rarityNameStyle(obj.rarity)}
          >
            {obj.rarity.toUpperCase()}
          </h4>
          {createWeaponStats("DPS", obj.dps)}
          {createWeaponStats("Firerate", obj.firerate)}
          {createWeaponStats("Body Hit", obj.bodyhit)}
          {createWeaponStats("Head Hit", obj.headhit)}
          {createWeaponStats("Magazine Size", obj.magazinesize)}
          {createWeaponStats("Reload Time", obj.reloadtime)}
        </div>
      </Paper>
    </>
  );
};

export default function WeaponSearchresults({ searchResults }) {
  const state = useContext(UserContext);
  const { weaponResults, handleOpen } = state;
  return (
    <div className={styles.container}>
      <ModalScreen />
      {weaponResults.data.data.entries.map(val => (
        <React.Fragment key={val.identifier}>
          {val.name.toLowerCase().includes(searchResults) &&
            searchResults.length > 0 && (
              <label style={colorType(val.rarity)}>
                <div
                  style={{ margin: "10px" }}
                  ref={ref => (weaponResults[val.identifier] = ref)}
                  onClick={() =>
                    handleOpen(
                      weaponModal({
                        name: val.name,
                        rarity: val.rarity,
                        image: val.image,
                        dps: val.stats.dps,
                        firerate: val.stats.firerate,
                        bodyhit: val.stats.hit_body,
                        headhit: val.stats.hit_head,
                        magazinesize: val.stats.magazinesize,
                        reloadtime: val.stats.reloadtime
                      })
                    )
                  }
                >
                  <p>
                    <strong>{val.name}</strong>
                  </p>
                  <img src={val.image} className={styles.weaponPics} alt="" />
                </div>
              </label>
            )}
        </React.Fragment>
      ))}
    </div>
  );
}
