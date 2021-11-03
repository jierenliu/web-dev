import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
            <h1>Hello World!</h1>
            <Link to="/a6/practice">
                Practice
            </Link> |
            <Link to="/a6/twitter/home">
                Build
            </Link>(In Build, click Twitter logo back to practice) |
            <Link to="../../a7/practice">
                To HomeWork 7
            </Link>
        </>
    )
};

export default HelloWorld;
