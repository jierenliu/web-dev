const TWEET_API = 'https://tranquil-island-31288.herokuapp.com/api/tweets';

export const fetchAllTweets = (dispatch) => {
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets => {
            dispatch({
                type: 'fetch-all-tweets',
                tweets
            })
        }

        );

}
export const postNewTweet = (dispatch, newTweet) => {
    console.log('in post');
    console.log(JSON.stringify(newTweet));
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );
}


export const deleteTweet = (dispatch, tweet) =>{
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
        type: 'delete-tweet',
        tweet
    }));
}

export const likeTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'like-tweet',
                tweet
            }));



