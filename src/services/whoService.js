const WHO_API = 'https://tranquil-island-31288.herokuapp.com/whoToFollow';

export const fetchWhoToFollow = (dispatch) => {
    fetch(WHO_API)
        .then(response => response.json())
        .then(who => {
                dispatch({
                    type: 'fetch-all-whoToFollow',
                    who
                })
            }
        );
}
