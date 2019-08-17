import React, { useEffect, useState, useContext } from 'react';
import styles from "../Modules/component_styles/playersearch-results-comp.module.css";
import PlayerSearchContext from "../Components/Context/PlayerSearchContext";
import Paper from '@material-ui/core/Paper';



export default function PlayerSearchResults() {
    const state = useContext(PlayerSearchContext);
    const { userId } = state;
    
    console.log(userId);
    const searchResultData = (obj) => {
        for (let [key, value] of Object.entries(obj.data.stats)) {
            if(value.length > 0) {
                return value.map((val, index) => (
                    val.friendlyName !== null &&
                    val.entries.length < 2 &&
                    <React.Fragment key={index}>
                        <Paper style={{width: '25%', height: 'auto'}} key={index} >
                                <h3>{val.friendlyName}</h3>
                                {
                                    val.friendlyName !== null &&                            
                                    val.entries.map(val => {
                                        
                                        return Object.keys(val.stats).map(key =>(
                                            <>
                                                <p>{key + ": " + val.stats[key]}</p>
                                            </>
                                        ))
                                    })
                                }
                        </Paper><br />
                    </React.Fragment>
            
                ))
            } 
        }
    }
   
    
    
    return (
        <>
            <div className={styles.container}>
                {
                   
                    searchResultData(userId)
                    
                }
            </div>
        </>
    )
}