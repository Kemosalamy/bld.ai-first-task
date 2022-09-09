import { createContext, useContext, useState } from 'react';
import './style.css';
import { StateContext } from "./App";

function Template(){

    let b = useContext(StateContext);

    b.setTime(3);

    return (
        <>
        {b.time}
        </>
    )

}


export default Template;
