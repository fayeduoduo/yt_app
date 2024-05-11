import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import VideoLists from "./components/VideoLists";
import VideoDetail from "./components/VideoDetail";
import Youtube from "./api/Youtube";
import useVideos from "./hooks/useVideos";
import "./index.css";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("building");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  //直接变成一行在 onVideoSelect那直接写了
  // const videoSelect = (video) => {
  //   setSelectedVideo(video);
  // };

  return (
    <div className="container">
      <SearchBar onSubmitForm={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="fice wide column">
            <VideoLists
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
