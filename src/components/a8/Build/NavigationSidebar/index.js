import React from "react";
import {Link} from "react-router-dom";
const NavigationSidebar = ({active = 'explore'}) => {

    return(
        <>
            <div id="navi" className="list-group">
                <Link to="/a8/" className="list-group-item" href="#">
                    <i className="fab fa-twitter"/></Link>
                <Link to="/a8/twitter/home" className={`list-group-item ${active==='home'?'active':''}`} href="#">
                    <i className="fas fa-home"/> Home</Link>
                <Link to="/a8/twitter/explore" className={`list-group-item ${active==='explore'?'active':''}`} >
                    <i className="fas fa-hashtag"/> Explore</Link>
                <a className="list-group-item" href="#">
                    <i className="fas fa-bell"/> Notifications</a>
                <a className="list-group-item" href="#">
                    <i className="fas fa-envelope"/> Messages</a>
                <a className="list-group-item" href="#">
                    <i className="fas fa-bookmark"/> Bookmarks</a>
                <a className="list-group-item" href="#">
                    <i className="fas fa-list-ul"/> Lists</a>
                <Link to="/a8/twitter/profile" className={`list-group-item ${active==='profile'?'active':''}`} href="#">
                    <i className="fas fa-user"/> Profile</Link>
                <a className="list-group-item" href="#">
                    <i className="fas fa-ellipsis-h"/> More</a>
            </div>
            <div className="d-grid mt-2">
                <a href="#"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
