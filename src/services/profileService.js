const PROFILE_API = 'http://localhost:4000/api/profile';

export const fetchInfo = (dispatch) => {
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(info =>
            dispatch({
                type: 'fetch-profile',
                info
            })
        );

}
export const changeInfo = (dispatch, info) => {
    fetch(PROFILE_API, {
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
