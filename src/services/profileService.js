const PROFILE_API = 'https://tranquil-island-31288.herokuapp.com/profile';

export const fetchInfo = (dispatch) => {
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(info => {
            const original = info[0];
            dispatch({
                type: 'fetch-profile',
                original
            })
        }

        );

}
export const changeInfo = (dispatch, info) => {
    fetch(`${PROFILE_API}/${info._id}`, {
        method: 'PUT',
        body: JSON.stringify(info),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(info =>
            dispatch({
                type: 'save-info',
                info
            }));
}
