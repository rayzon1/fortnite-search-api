import React from 'react';
// import { Paper, makeStyles } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import SearchBar from "../Components/SearchBar";
import Results from "../Components/Results";

// TODO: Set upcoming page with results from upcoming query.


export default function Upcoming() {
    

    return (
        <Fade right>
            <div>
                <SearchBar />
                <Results />
            </div>     
        </Fade> 
    )

}