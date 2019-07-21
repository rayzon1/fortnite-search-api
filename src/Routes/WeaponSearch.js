import React, { useState } from 'react';
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
    const [searchResults, setSearchResults] = useState("")

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "41.5px"}}>
                <Paper style={style.paper}>
                    <h2>Weapon Search Page!</h2>
                    <p>Search for weapon keywords (assault rifle, shotgun, smg).</p>
                </Paper>
            </div>
            <SearchBar setSearchResults={setSearchResults} />
            <WeaponSearchResults searchResults={searchResults} />
        </div>
    )
}