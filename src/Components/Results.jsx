import React, { useContext, useEffect } from 'react';
import UserContext from "../Components/Context/index";

// TODO: Switch userContext from this component to Upcoming component.

export default function Results () {
    const state = useContext(UserContext);
    // const { results, callApi, upcoming } = state;
    

    // useEffect(() => {
    //     callApi(upcoming);
    // }, [])

    
    return (
        <p>Hello</p>
    )

}