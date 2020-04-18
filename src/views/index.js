import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {getAllVideo} from '../store/video/video.action';
import Video from '../components/Video';


const View = () => {
    const dispatch = useDispatch();
    const video = useSelector(state => state.video);

    useEffect(() => {
        dispatch(getAllVideo())
    }, [dispatch]);
    
    return (
        <div className="container">
            <Video data={video}/>
        </div>
    )
};



export default View;