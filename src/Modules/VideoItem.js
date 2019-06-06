import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className='ui card' style={{ marginRight: '-10px' }} >
            <div style={{ background: '#010B0E', height: '100%'  }}>
                <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} key={video.id.videoId} height='55%' width='100%' />
                <p>{video.snippet.channelTitle}</p>
                <p>{video.snippet.title}</p>
            </div>
        </div>
    );
};

export default VideoItem;
