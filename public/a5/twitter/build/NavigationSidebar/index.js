const NavigationSidebar = () => {

    return(`
            <div id="navi" class="list-group">
                <a class="list-group-item" href="#">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <a id = "homeID" class="list-group-item" href="../HomeScreen/home.html">
                    <i class="fas fa-home"></i> Home</a>
                <a  id="exID" class="list-group-item" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag"></i> Explore</a>
                <a class="list-group-item" href="#">
                    <i class="fas fa-bell"></i> Notifications</a>
                <a class="list-group-item" href="#">
                    <i class="fas fa-envelope"></i> Messages</a>   
                <a class="list-group-item" href="#">
                    <i class="fas fa-bookmark"></i> Bookmarks</a>
                <a class="list-group-item" href="#">
                    <i class="fas fa-list-ul"></i> Lists</a>
                <a class="list-group-item" href="#">
                    <i class="fas fa-user"></i> Profile</a>
                <a class="list-group-item" href="#">
                    <i class="fas fa-ellipsis-h"></i> More</a>        
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
