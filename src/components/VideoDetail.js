import React, { Fragment } from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Fragment>
      <div className='ui embed'>
        <iframe src={videoSrc} title={video.snippet.title}></iframe>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </Fragment>
  );
};

export default VideoDetail;
