import React from "react";
import ItemVideo from '../../components/Video/ItemVideo';

const Video = ({ data }) => {
    return (
        data.loading ? (
            <div className="loading-box">بارگذاری ویدیو ...</div>
        ) : data.videos !== null ? (
            data.videos && data.videos.map((item, index) => (
                <ItemVideo itemVideo={item} key={index}/>
            ))
        ) : (
            <div>Problem</div>
        )
    )
};

export default Video;
