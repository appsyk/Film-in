import React from 'react';
// import App from '../components/App';

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div >
                {/* <h1 style={{ textAlign:'center', fontSize:'100px' }}>Search Video546545432555</h1> */}
            </div>
        );
    }

    // const VidSrc = 'https://www.youtube.com/embed/' + (video.id.videoId) ;
    const VidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            {/* <App /> */}
            <div className='ui embed' style={{ marginTop: '3.5%' }}>
                <iframe title='video player' src={VidSrc} />
            </div>

            <div className='ui segment' style={{ background: "#010B0E" }} >
                <h4 className="ui header, listColor">{video.snippet.title}</h4>
                <p className='listColor'>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;