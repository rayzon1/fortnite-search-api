import React from 'react';
import SearchBar from '../Components/SearchBar';
import Paper from '@material-ui/core/Paper';
import WeaponSearchResults from '../Components/WeaponSearchResults';

const style = {
    paper: {
        width: "55%",
        height: "50%",
    }
}

export default function WeaponSearch () {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "41.5px"}}>
                <Paper style={style.paper}>
                    <h2>Weapon Search Page!</h2>
                    <p>Search for weapon keywords (assault rifle, shotgun, smg).</p>
                </Paper>
            </div>
            <SearchBar />
            <WeaponSearchResults />
        </div>
    )
}