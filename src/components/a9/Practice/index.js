import React from "react";
import {Link} from "react-router-dom";
import Movies from "./Movies";
const Practice = () => {
    return(
        <>
            <h1>Homework9/Practice9</h1>
            <Link to="/a8/practice">
                To Homework 8
            </Link> |
            <Link to="/a9/twitter/home">
                Build
            </Link> (In Build, click Twitter logo back to practice)
            <Movies/>
        </>
    )
};

export default Practice;
