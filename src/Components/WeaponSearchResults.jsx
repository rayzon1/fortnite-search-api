import React, { useContext } from "react";
import UserContext from "./Context/index";
import ModalScreen from "./ModalScreen";
import { Paper } from "@material-ui/core";

const style = {
  weaponPics: {
    width: "12rem",
    height: "10rem"
  },
  modalPaper: {
    width: "20rem",
    height: "20rem",
    position: "absolute",
    bottom: "30vh",
    right: "42vw",
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  container: {
    marginTop: "40px",
    display: "inline-block",
    width: "85%",
    wordWrap: "wrap"
  }
};

/**
 * ColorType will determine the background color styles of the item depending on obj.rarity.
 */
const colorType = val => {
  if (val === "legendary") {
    return {
      backgroundColor: "rgba(252, 199, 45, 0.8)",
      borderRadius: "25px",
      margin: "10px",
      boxShadow: "5px 10px 8px #888888"
    };
  } else if (val === "epic") {
    return {
      backgroundColor: "rgba(134, 3, 174, 0.7)",
      borderRadius: "25px",
      margin: "10px",
      boxShadow: "5px 10px 8px #888888"
    };
  } else if (val === "rare") {
    return {
      backgroundColor: "rgba(3, 116, 204, 0.8)",
      borderRadius: "25px",
      margin: "10px",
      boxShadow: "5px 10px 8px #888888"
    };
  } else if (val === "uncommon") {
    return {
      backgroundColor: "rgba(55, 166, 30, 0.8)",
      borderRadius: "25px",
      margin: "10px",
      boxShadow: "5px 10px 8px #888888"
    };
  } else {
    return {
      backgroundColor: "rgba(109, 103, 105, 0.5)",
      borderRadius: "25px",
      margin: "10px",
      boxShadow: "5px 10px 8px #888888"
    };
  }
};

/**
 * Weapon modal component will be displayed when any of the weapon boxes are clicked.
 * Takes in weapon information as parameters to display in modal.
 * @param {object} obj
 */
const weaponModal = obj => {
  return (
    <Paper style={style.modalPaper}>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${obj.image})`,
          backgroundSize: "8rem 8rem",
          backgroundRepeat: "no-repeat"
        }}
      >
        <h4>
          <strong>{obj.name}</strong>
        </h4>
        <h4
          style={
            obj.rarity === "epic"
              ? { color: "purple" }
              : obj.rarity === "common"
              ? { color: "gray" }
              : obj.rarity === "legendary"
              ? { color: "gold" }
              : obj.rarity === "rare"
              ? { color: "blue" }
              : obj.rarity === "uncommon"
              ? { color: "green" }
              : null
          }
        >
          {obj.rarity.toUpperCase()}
        </h4>

        <p>
          {"DPS: "}
          <span style={{ color: "red", margin: "0" }}>{obj.dps}</span>
        </p>

        <p>
          {"Firerate: "}
          <span style={{ color: "red", margin: "0" }}>{obj.firerate}</span>
        </p>

        <strong>
          <p>
            {"Body Hit: "}
            <span style={{ color: "red" }}>{obj.bodyhit}</span>
          </p>
        </strong>
        <strong>
          <p>
            {"Head Hit: "}
            <span style={{ color: "red" }}>{obj.headhit}</span>
          </p>
        </strong>
        <strong>
          <p>
            {"Magazine Size: "}
            <span style={{ color: "red" }}>{obj.magazinesize}</span>
          </p>
        </strong>
        <strong>
          <p>
            {"Reload Time: "}
            <span style={{ color: "red" }}>{obj.reloadtime}</span>
          </p>
        </strong>
      </div>
    </Paper>
  );
};

export default function WeaponSearchresults({ searchResults }) {
  const state = useContext(UserContext);
  const { weaponResults, handleOpen } = state;
  console.log(weaponResults);
  return (
    <div style={style.container}>
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
                  <img src={val.image} style={style.weaponPics} alt="" />
                </div>
              </label>
            )}
        </React.Fragment>
      ))}
    </div>
  );
}
