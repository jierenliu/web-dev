const PostSummaryItem = (post) => {
    const {topic, userName, time, title, image, tweets} = post;
    let res = `
    <div class="list-group-item wd-main-info ">
    <div class="row">
        <div class="col-9">
    `;
    if (topic) {
        res += `<span class="text-muted">${topic}</span><br/>`;
    }
    if (userName) {
        res += `<span class="wd-white-text"><strong>${userName} </strong></span>`;
    }
    if (time) {
        res += `<i class="fas fa-circle wd-white-text"></i><span class="text-muted"> - ${time}</span>`
    }
    res += `<br/>`;
    if (title) {
        res += `<span class="wd-white-text"><strong>${title}</strong></span><br/>`;
    }
    res += `</div><div class="col-3 d-flex justify-content-center align-self-center">`;
    if (image) {
        res += `
        <img src="${image}" class="wd-small-pic ">
        </div>
        </div>
        </div>
        `
    }

    return (res)
}
export default PostSummaryItem