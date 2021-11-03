import posts from './data/tweets.json';

const tweets = (state = posts, action) => {
    switch (action.type) {
        case 'like-tweet':
            return (state.map(tweet => {
                    if(tweet._id === action.post._id) {
                        if(tweet.liked === true) {
                            tweet.liked = false;
                            tweet.stats.likes--;
                        } else {
                            tweet.liked = true;
                            tweet.stats.likes++;
                        }
                        return tweet;
                    } else {
                        return tweet;
                    }
                })
            );
            break;
        case 'delete-tweet':
            return (
                state.filter(posts => posts._id !== action.post._id)
            )
            break;
        case 'create-tweet':
            const tweet = {
                "_id": (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tweet,
                "avatar-image": "../../../images/react.jpeg",
                "logo-image": "../../../images/react.jpeg",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            }
            return ([
                    tweet,
                    ...state]
            );
            break;
        default:
            return(state);
    }

};

export default tweets;
