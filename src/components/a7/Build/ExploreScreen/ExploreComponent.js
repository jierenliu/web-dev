import React from "react";
import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11">
                    <div className="input-group">
                        <span className="wd-search-left input-group-text"><i className="fas fa-search"/></span>
                        <input type="text" className="form-control wd-search-middle" placeholder="Search Twitter"/>
                    </div>
                </div>
                <div className="col-1 pt-2">
                    <a href="#" className="fas fa-cog wd-search-right wd-bigger-icon"/>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs mt-2">
                <li className="nav-item">
                    <a className="nav-link active" href="#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <a className="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div className="wd-img-group mt-1">
                <img src="../../images/starship.jpeg" className="wd-center-pic"/>
                    <div className="wd-img-tip wd-big-white-text"> SpaceX's Starship</div>
            </div>
            <PostSummaryList />
        </>
    );
}
export default ExploreComponent;
