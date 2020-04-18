import VideoActionTypes from "./video.types";

const INITIAL_STATE = {
    videos: null,
    loading: true
};

const videoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VideoActionTypes.GET_ALL_VIDEO:
            return {
                ...state,
                videos: action.payload,
            };
        case VideoActionTypes.SET_LOADING_VIDEO:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
};

export default videoReducer;
