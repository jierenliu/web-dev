import whoJson from './data/who.json';

const who = (state = whoJson, action) => {
    switch (action.type) {
        case 'fetch-all-whoToFollow':
            return action.who;
        default:
            return state;
    }
};

export default who;
