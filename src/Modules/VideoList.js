import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ vidList, onSelectVid }) => {
    const rendList = vidList.map((vid) => {

        return<VideoItem onVideoSelect={onSelectVid} key={vid.id.videoId} video={vid} />
    });
        return(
            <div>
                {rendList}
            </div>
        );
    }

export default VideoList;
