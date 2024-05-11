import React from "react";
import "../VideoItem.css";

const VideoListItem = ({ video, onVideoSelect }) => {
  const { thumbnails, title, channelId } = video.snippet;
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img src={thumbnails.medium.url} alt={channelId} className="ui image" />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoListItem;
