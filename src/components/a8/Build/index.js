import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import ExploreScreen from "./ExploreScreen";
import who from "../../../reducers/who";
import tweets from "../../../reducers/tweets";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import myProfile from "../../../reducers/myProfile";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import EditProfile from "./ProfileScreen/EditProfile";
const reducer = combineReducers({tweets, who, myProfile})
const store = createStore(reducer);


const Build = () => {
    return(
        <Provider store={store}>
        <div>
            <Route path={["/", "/a8/twitter/home", "/a8/twitter"]} exact={true} component={HomeScreen}/>
            <Route path="/a8/twitter/explore" exact={true} component={ExploreScreen}/>
            <Route path="/a8/twitter/profile" exact={true} component={ProfileScreen}/>
            <Route path="/a8/twitter/profileEdit" exact={true} component={EditProfile}/>
        </div>
        </Provider>
    );
};
export default Build;
