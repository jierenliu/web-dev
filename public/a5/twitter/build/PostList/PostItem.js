const PostItem = (post) => {
    const {name, username, head, time, message, mainPic, mainTitle, mainMessage, link, comment, retweet, like} = post;

    const basicInfo = `
        <div class="mb-2">
            <span class="wd-white-text"><strong>${name} </strong><i class="fas fa-check-circle"></i></span>
            <span class="wd-grey-text"> @${username} · ${time}</span><br/>
            <span class="wd-white-text">${message}</span><br/>
        </div>
    `;
    let mainInfo = '';
    if (mainTitle) {
        mainInfo += `
        <ul class="list-group wd-main-cur">
            <div class="list-group-item border-secondary pt-0 ps-0 pb-0 pe-0">
                <img src=${mainPic} class="wd-center-pic wd-main-topCur">
            </div>
            <div class="list-group-item border-secondary">
                <span>${mainTitle}</span><br/>
                <span class="wd-grey-text">${mainMessage}</span><br/>
                <span class="wd-grey-text"><i class="fas fa-link"></i> ${link}</span><br/>
            </div>
        `;
    } else {
        mainInfo += `
        <ul class="list-group wd-main-cur">
            <div class="list-group-item border-secondary pt-0 ps-0 pb-0 pe-0">
                <img src=${mainPic} class="wd-center-pic wd-main-cur">
            </div>
        `;
    }
    mainInfo += `</ul>`;

    return (`
    <div class="row border-secondary border-bottom border-start border-end pt-2">
        <div class="col-1"><img src=${head} class="wd-xs-pic"></div>
        <div class="col-11 ps-4">
            ${basicInfo}
            ${mainInfo}
            <div class="row pt-2 pb-2">
                <span class="col-3 wd-lower-icon"><i class="far fa-comment"></i> &nbsp&nbsp${comment}</span>
                <span class="col-3 wd-lower-icon"><i class="fas fa-retweet"></i> &nbsp&nbsp${retweet}</span>
                <span class="col-3 wd-lower-icon"><i class="far fa-heart"></i> &nbsp&nbsp${like}</span>
                <span class="col-3 wd-lower-icon"><i class="far fa-share-square"></i></span>
            </div>
        </div>
    </div>
    `)
}
export default PostItem