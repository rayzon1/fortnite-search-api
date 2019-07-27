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
    right: "41.5vw",
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
    return modalBackground("rgba(252, 199, 45, 0.8)");
  } else if (val === "epic") {
    return modalBackground("rgba(134, 3, 174, 0.7)");
  } else if (val === "rare") {
    return modalBackground("rgba(3, 116, 204, 0.8)");
  } else if (val === "uncommon") {
    return modalBackground("rgba(55, 166, 30, 0.8)");
  } else {
    return modalBackground("rgba(109, 103, 105, 0.5)");
  }
};

const modalBackground = (color) => {
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
    if (rarity === "epic") {
        return {color: "purple"}
    } else if (rarity === "common") {
        return { color: "gray" }
    } else if (rarity === "legendary") {
        return { color: "gold" }
    } else if (rarity === "rare") {
        return { color: "blue" }
    } else {
        return { color: "green" }
    }
}

const weaponModal = obj => {
  return (
    <>
      <Paper style={style.modalPaper}>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(-45deg, rgba(254,252,234,0.5) 0%,rgba(241,218,54,0.5) 100%)",
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat"
          }}
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
