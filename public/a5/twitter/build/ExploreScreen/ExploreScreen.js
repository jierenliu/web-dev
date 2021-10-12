import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        <div class="col-10 col-mid-10 col-lg-7 col-xl-6">
            ${ExploreComponent()}
        </div> 
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
    let id = $('#exID');
    id[0].className += " active";
})($);


// const init = () => {
//     var header = document.getElementById("navi");
//     var btns = header.getElementsByClassName("list-group-item");
//     for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function() {
//             var current = document.getElementsByClassName("active");
//             current[0].className = current[0].className.replace(" active", "");
//             this.className += " active";
//         });
//     }
//
// }
//
// $(init);