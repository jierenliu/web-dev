import React from "react";
import {Link} from "react-router-dom";
// import ExploreScreen from "./ExploreScreen/";
import HomeScreen from "./HomeScreen/HomeScreen";
const Index = () => {
    return(
        <>
            <h1>Build</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
            {/*<ExploreScreen/>*/}
            <HomeScreen/>
        </>
    )
};

export default Index;
