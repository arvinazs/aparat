import VideoActionTypes from "./video.types";
import axios from 'axios';

export const getAllVideo = () => dispatch => {
    dispatch(setLoading(true));
    axios({
        method: 'get',
        url: `http://api.aparat.com/fa/v1/video/video/mostViewedVideos`
    }).then( response => {
        dispatch({
            type: VideoActionTypes.GET_ALL_VIDEO,
            payload: response.data.data
        });
        dispatch(setLoading(false));
    }).catch(error => {
        console.log('Response error', error);
        dispatch(setLoading(false));
    })
}

const setLoading = (flag) => {
    return {
        type: VideoActionTypes.SET_LOADING_VIDEO,
        payload: flag
    };
}
