import React from "react";
import {Link} from "react-router-dom";
import APIExamples from "./APIExamples";
const Practice = () => {
    return(
        <>
            <h1>Homework8/Practice8</h1>
            <Link to="/a7/practice">
                To Homework 7
            </Link> |
            <Link to="/a8/twitter/home">
                Build
            </Link> (In Build, click Twitter logo back to practice)
            <APIExamples/>

        </>
    )
};

export default Practice;
