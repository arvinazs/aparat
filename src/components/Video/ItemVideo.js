import React from "react";

const ItemVideo = ({ itemVideo }) => {

    let videos = document.getElementsByTagName("video"),
        fraction = 0.9;
    const viewportScroll = () => {
        for (var i = 0; i < videos.length; i++) {
            var video = videos[i];

            var x = video.offsetLeft,
                y = video.offsetTop,
                w = video.offsetWidth,
                h = video.offsetHeight,
                r = x + w,
                b = y + h,
                visibleX,
                visibleY,
                visible;

            visibleX = Math.max(
                0,
                Math.min(
                    w,
                    window.pageXOffset + window.innerWidth - x,
                    r - window.pageXOffset
                )
            );
            visibleY = Math.max(
                0,
                Math.min(
                    h,
                    window.pageYOffset + window.innerHeight - y,
                    b - window.pageYOffset
                )
            );

            visible = (visibleX * visibleY) / (w * h);

            var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;

            if (visible > fraction) {
                if (!isPlaying) {
                    video.play();
                }
            } else {
                video.pause()
            }
        }
    };

    window.addEventListener("scroll", viewportScroll, false);
    window.addEventListener("resize", viewportScroll, false);

    return (
        <div key={itemVideo.attributes.id} className="item-video">
            <div className="item-video__title">
                <h2>{itemVideo.attributes.title}</h2>
            </div>
            <div className="item-video__movie">
                <video
                    id={`video${itemVideo.attributes.id}`}
                    width="600"
                    height="400"
                    controls
                >
                    <source
                        src={itemVideo.attributes.preview_src}
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="item-video__description">
                <p>{itemVideo.attributes.description}</p>
            </div>
        </div>
    );
};

export default ItemVideo;
