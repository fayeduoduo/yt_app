import React from "react";
import VideoListItem from "./VideoListItem";

const VideoLists = ({ videos, onVideoSelect }) => {
  const renderVideos = videos.map((video, i) => {
    return (
      <VideoListItem key={i} video={video} onVideoSelect={onVideoSelect} />
    );
  });
  return (
    <div className="ui relaxed divided list" style={{ marginLeft: "10px" }}>
      {renderVideos}
    </div>
  );
};

export default VideoLists;
