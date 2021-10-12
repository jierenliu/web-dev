const followItem = (wh) => {
    return (`
    <div class="list-group-item">
                    <div class="row mb-1">
                        <div class="col-2"><img src=${wh.avatarIcon} class="wd-xs-pic"></div>
                        <div class="col-7"><strong>${wh.userName} </strong><i class="fas fa-circle"></i><br/>
                            <span class="wd-right-b-word">@${wh.handle}</span>
                        </div>
                        <button type="button" class="col-2 btn btn-primary wd-default-button">Follow</button>
                    </div>
                </div>
    `);
}
export default followItem