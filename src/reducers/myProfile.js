import profileData from "./data/profileData.json";

const myProfile = (state = profileData, action) => {
    switch (action.type) {
        case "fetch-profile":
            console.log(action.info);
            console.log(state);
            return (action.info);
        case "save-info":
            console.log('saveinfo')
            console.log(action.info)
            return ({
                ...state,
                ...action.info,
            })
        default:
            return (state)
    }
};

export default myProfile;

