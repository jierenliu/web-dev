import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                <div class="col-11">
                    <div class="input-group">
                        <span class="input-group-text wd-search-left"><i class="fas fa-search"></i></span>
                        <input type="text" class="form-control wd-search-middle" placeholder="Search Twitter">
                    </div>
                </div>
                <div class="col-1 pt-2">
                    <a href="explore-settings.html" class="fas fa-cog wd-search-right wd-bigger-icon"></a>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs mt-2">
                      <!-- tabs -->
                 <li class="nav-item">
                        <a class="nav-link active" href="#">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="wd-img-group mt-1">
                <img src="../../images/starship.jpeg" class="wd-center-pic">
                <div class="wd-img-tip wd-big-white-text"> SpaceX's Starship</div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
