import profileData from "./data/profileData.json";

const myProfile = (state = profileData, action) => {
    switch (action.type) {
        case "save-info":
            return ({
                ...state,
                ...action.info,
            })
        default:
            return (state)
    }
};

export default myProfile;

