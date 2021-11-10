import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList"
import ReduxExamples from "./ReduxExamples/components";
const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <Link to="/a6/hello">
                To Homework 6
            </Link> |
            <Link to="/a7/twitter/home">
                Build
            </Link> (In Build, click Twitter logo back to practice) |
            <Link to="/a8/practice">
                To Homework 8
            </Link> |
            <ReduxExamples/>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </>
    )
};

export default Practice;
